"use client"

import { useState } from 'react';
import { isValidInstagramUrl } from '@/lib/instagram-validator';
import { fetchInstagramData } from '@/lib/api-client';

interface DownloaderState {
    isLoading: boolean;
    error: string | null;
    data: any | null;
}

export function useDownloader() {
    const [state, setState] = useState<DownloaderState>({
        isLoading: false,
        error: null,
        data: null,
    });

    const downloadVideo = async (url: string, options?: { onSuccess?: (data: any) => void }) => {
        // Reset state
        setState(prev => ({ ...prev, isLoading: true, error: null }));

        // 1. Client-side Validation (Security Best Practice)
        if (!isValidInstagramUrl(url)) {
            setState({
                isLoading: false,
                error: "Please enter a valid Instagram URL (e.g., https://www.instagram.com/reel/...)",
                data: null
            });
            return;
        }

        try {
            // 2. Call API
            const result = await fetchInstagramData(url);

            if (result.success && result.data) {
                // Save to recent downloads if callback provided
                if (options?.onSuccess) {
                    options.onSuccess(result.data);
                }

                setState({
                    isLoading: false,
                    error: null,
                    data: result.data
                });
            } else {
                throw new Error(result.error || "Failed to download");
            }

        } catch (err: any) {
            setState({
                isLoading: false,
                error: err.message || "Something went wrong. Please try again.",
                data: null
            });
        }
    };

    return {
        ...state,
        downloadVideo,
        clearError: () => setState(prev => ({ ...prev, error: null }))
    };
}
