export const INSTAGRAM_URL_REGEX = /^(https?:\/\/)?(www\.)?instagram\.com\/(p|reel|tv|stories)\/([a-zA-Z0-9_-]+)\/?/;

export function isValidInstagramUrl(url: string): boolean {
    if (!url) return false;
    try {
        const parsedUrl = new URL(url);
        // Double check hostname to prevent subdomains like invalid.instagram.com if regex is loose
        if (parsedUrl.hostname !== "www.instagram.com" && parsedUrl.hostname !== "instagram.com") {
            return false;
        }
        return INSTAGRAM_URL_REGEX.test(url);
    } catch (e) {
        // If URL constructor fails, it's not a valid URL
        return false;
    }
}

export function getInstagramVideoId(url: string): string | null {
    const match = url.match(INSTAGRAM_URL_REGEX);
    if (match && match[4]) {
        return match[4];
    }
    return null;
}
