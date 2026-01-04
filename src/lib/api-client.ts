export class ApiError extends Error {
    constructor(public status: number, message: string) {
        super(message);
        this.name = 'ApiError';
    }
}

interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export async function fetchInstagramData(url: string) {
    try {
        const response = await fetch('/api/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new ApiError(response.status, result.error || 'Failed to fetch video details');
        }

        return result as ApiResponse<any>;
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new Error('Network error or server unavailable');
    }
}
