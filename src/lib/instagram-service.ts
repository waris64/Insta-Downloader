import { getInstagramVideoId } from "./instagram-validator";

export interface MediaItem {
    url: string;
    type: 'video' | 'image' | 'audio';
    thumbnail?: string;
    extension?: string;
    quality?: string;
}

export interface InstagramData {
    id: string;
    url: string;
    thumbnail: string;
    title: string;
    author: string;
    platform: 'instagram';
    type: 'video' | 'image' | 'multiple';
    medias: MediaItem[];
}

// Define the expected shape of the RapidAPI response
interface RapidApiResponse {
    title?: string;
    thumbnail?: string;
    thumbnail_url?: string;
    media?: string;
    download_url?: string;
    video_url?: string;
    username?: string;
    id?: string;
    type?: string;
    medias?: any[];
    [key: string]: any;
}

export async function getInstagramVideo(url: string): Promise<InstagramData> {
    const apiKey = process.env.RAPIDAPI_KEY;
    const apiHost = process.env.RAPIDAPI_HOST || 'instagram-reels-downloader-api.p.rapidapi.com';

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
                if (response.status === 401 || response.status === 403) {
                    throw new Error(`Authentication error: ${response.status} - Check API Key`);
                }
                throw new Error(`External API error: ${response.status}`);
            }

            const responseData: any = await response.json();
            const data = responseData.data || responseData;

            // Map medias
            let medias: MediaItem[] = [];
            if (data.medias && Array.isArray(data.medias)) {
                medias = data.medias.map((m: any) => ({
                    url: m.url,
                    type: m.type || (m.extension === 'mp4' ? 'video' : 'image'),
                    thumbnail: m.thumbnail || data.thumbnail || "",
                    extension: m.extension,
                    quality: m.quality || m.resolution
                }));
            }

            // Primary URL logic
            let primaryUrl = data.download_url || data.video_url || data.media;

            // If no primary URL, pick the best video or image from medias
            if (!primaryUrl && medias.length > 0) {
                const bestMedia = medias.find(m => m.type === 'video') || medias.find(m => m.type === 'image') || medias[0];
                primaryUrl = bestMedia.url;
            }

            // Fallback for single image/video URL
            if (!primaryUrl && data.url && !data.url.includes('instagram.com')) {
                primaryUrl = data.url;
            }

            if (!primaryUrl) {
                throw new Error("Could not find download URL in API response");
            }

            const thumbnail = data.thumbnail || data.thumbnail_url || (medias.length > 0 ? medias[0].thumbnail : "");
            const title = data.title || "Instagram Content";
            const author = data.author || data.username || (data.owner ? data.owner.username : "Instagram User");
            const videoId = data.id || getInstagramVideoId(url) || "unknown-id";
            const type = data.type === 'multiple' && medias.filter(m => m.type !== 'audio').length > 1 ? 'multiple' : (medias.some(m => m.type === 'video') ? 'video' : 'image');

            return {
                id: videoId,
                url: primaryUrl,
                thumbnail: thumbnail || "",
                title: title,
                author: author,
                platform: 'instagram',
                type: type as any,
                medias: medias
            };

        } catch (error: any) {
            lastError = error;
            if (error.message.includes('Authentication error')) throw error;
            retries--;
            if (retries > 0) await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    throw lastError || new Error("Failed to fetch from Instagram API");
}
