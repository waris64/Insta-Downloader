import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const videoUrl = searchParams.get('url');
    const filename = searchParams.get('filename') || 'instagram-video.mp4';

    if (!videoUrl) {
        return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
    }

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout

        const response = await fetch(videoUrl, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`Failed to fetch video: ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type') || 'video/mp4';
        const contentLength = response.headers.get('content-length');

        // Final sanitization for the header
        const safeFilename = filename.replace(/[\n\r]/g, '').replace(/[^\x20-\x7E]/g, '');

        const headers = new Headers();
        headers.set('Content-Type', contentType);
        headers.set('Content-Disposition', `attachment; filename="${safeFilename}"`);
        if (contentLength) {
            headers.set('Content-Length', contentLength);
        }

        // Return the video as a stream
        return new Response(response.body, {
            status: 200,
            headers,
        });
    } catch (error: any) {
        console.error('Proxy Error:', error);
        return NextResponse.json({ error: 'Failed to proxy video' }, { status: 500 });
    }
}
