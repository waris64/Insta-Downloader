import { getInstagramVideoId } from "./instagram-validator";

interface InstagramData {
    id: string;
    url: string;
    thumbnail: string;
    title: string;
    author: string;
    platform: 'instagram';
}

// Define the expected shape of the RapidAPI response
// Note: This is an assumption based on common API patterns. 
// We will need to verify the actual response structure.
interface RapidApiResponse {
    title?: string;
    thumbnail?: string;
    thumbnail_url?: string;
    media?: string;
    download_url?: string;
    video_url?: string;
    username?: string;
    id?: string;
    // Add other potential fields as needed based on actual API response
    [key: string]: any;
}

export async function getInstagramVideo(url: string): Promise<InstagramData> {
    const apiKey = process.env.RAPIDAPI_KEY;
    const apiHost = process.env.RAPIDAPI_HOST || 'instagram-reels-downloader-api.p.rapidapi.com';

    // DEBUG: Check if key is loaded
    console.log("Debug: API Key loaded?", apiKey ? "Yes" : "No");
    if (apiKey) {
        console.log("Debug: API Key (first 4 chars):", apiKey.substring(0, 4) + "****");
    }
    console.log("Debug: API Host:", apiHost);

    if (!apiKey) {
        throw new Error("Server Misconfiguration: RAPIDAPI_KEY is missing");
    }

    const encodedUrl = encodeURIComponent(url);
    const apiUrl = `https://${apiHost}/download?url=${encodedUrl}`;

    // Retry logic
    let retries = 3;
    let lastError;

    while (retries > 0) {
        try {
            // Using a signal with a longer timeout if supported, otherwise just simple fetch
            // Node 18+ supports AbortSignal.timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': apiHost
                },
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (!response.ok) {
                const errorText = await response.text();
                // If it's a 429 (Too Many Requests), maybe don't retry immediately or handle differently, 
                // but for now we treat it as an error to be thrown (or we could return it).
                // If it's 401/403 (Auth), retrying won't help.
                if (response.status === 401 || response.status === 403) {
                    console.error(`RapidAPI Auth Error (${response.status}):`, errorText);
                    throw new Error(`Authentication error: ${response.status} - Check API Key`);
                }

                console.error(`RapidAPI Error (${response.status}):`, errorText);
                throw new Error(`External API error: ${response.status}`);
            }

            // If success, break loop and process data
            const responseData: any = await response.json();

            // Success path continues...
            console.log("RapidAPI Response:", JSON.stringify(responseData, null, 2));

            // DEBUG: Write to file to inspect structure
            try {
                const fs = await import('fs');
                const path = await import('path');
                fs.writeFileSync(path.join(process.cwd(), 'debug_response.json'), JSON.stringify(responseData, null, 2));
            } catch (e) {
                console.error("Failed to write debug file:", e);
            }

            // Handle nested data structure
            const data = responseData.data || responseData;

            // Map the API response to our internal data structure
            // 1. Check for 'medias' array (common in some rapidapi wrappers)
            let videoUrl = data.download_url || data.video_url || data.media;

            // If direct url not found, check medias array
            if (!videoUrl && data.medias && Array.isArray(data.medias)) {
                // Prioritize video type
                const videoMedia = data.medias.find((m: any) => m.type === 'video' || m.extension === 'mp4');
                if (videoMedia) {
                    videoUrl = videoMedia.url;
                }
            }

            // Fallback: check if 'url' matches what we need, but avoid source instagram urls
            if (!videoUrl && data.url && !data.url.includes('instagram.com')) {
                videoUrl = data.url;
            }

            const thumbnail = data.thumbnail || data.thumbnail_url;
            const title = data.title || "Instagram Video";
            const author = data.author || data.username || (data.owner ? data.owner.username : "Instagram User");
            const videoId = data.id || getInstagramVideoId(url) || "unknown-id";

            if (!videoUrl) {
                console.error("Missing video URL in response:", data);
                throw new Error("Could not find download URL in API response");
            }

            return {
                id: videoId,
                url: videoUrl,
                thumbnail: thumbnail || "",
                title: title,
                author: author,
                platform: 'instagram'
            };

        } catch (error: any) {
            lastError = error;
            console.warn(`Fetch attempt failed (${3 - retries + 1}/3):`, error.message);

            // Don't retry on auth errors
            if (error.message.includes('Authentication error')) {
                throw error;
            }

            retries--;
            if (retries > 0) {
                // Wait 1s before retry
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    }

    // If loop finishes without returning, throw the last error
    throw lastError || new Error("Failed to fetch from Instagram API after multiple attempts");

}
