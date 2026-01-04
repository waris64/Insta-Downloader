"use client"

import { useState, useEffect } from 'react'

const RECENT_DOWNLOADS_KEY = 'instasaver_recent_downloads'
const MAX_RECENT_ITEMS = 6

export interface RecentDownload {
    id: string
    url: string
    thumbnail: string
    title: string
    timestamp: number
    type?: 'video' | 'image' | 'multiple'
}

export function useRecentDownloads() {
    const [recentDownloads, setRecentDownloads] = useState<RecentDownload[]>([])

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem(RECENT_DOWNLOADS_KEY)
        if (saved) {
            try {
                setRecentDownloads(JSON.parse(saved))
            } catch (e) {
                console.error("Failed to parse recent downloads", e)
            }
        }
    }, [])

    const addRecentDownload = (item: Omit<RecentDownload, 'timestamp'>) => {
        const newItems = [
            { ...item, timestamp: Date.now() },
            ...recentDownloads.filter(i => i.id !== item.id)
        ].slice(0, MAX_RECENT_ITEMS)

        setRecentDownloads(newItems)
        localStorage.setItem(RECENT_DOWNLOADS_KEY, JSON.stringify(newItems))
    }

    const clearRecentDownloads = () => {
        setRecentDownloads([])
        localStorage.removeItem(RECENT_DOWNLOADS_KEY)
    }

    const removeRecentDownload = (id: string) => {
        const newItems = recentDownloads.filter(i => i.id !== id)
        setRecentDownloads(newItems)
        localStorage.setItem(RECENT_DOWNLOADS_KEY, JSON.stringify(newItems))
    }

    return {
        recentDownloads,
        addRecentDownload,
        clearRecentDownloads,
        removeRecentDownload
    }
}
