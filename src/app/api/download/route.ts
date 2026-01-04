import { NextResponse } from 'next/server';
import { isValidInstagramUrl } from '@/lib/instagram-validator';
import { getInstagramVideo } from '@/lib/instagram-service';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { url } = body;

        // 1. Server-side Validation
        if (!url || !isValidInstagramUrl(url)) {
            return NextResponse.json(
                { success: false, error: 'Invalid Instagram URL' },
                { status: 400 }
            );
        }

        // 2. Fetch Data (Mock or Real)
        const data = await getInstagramVideo(url);

        // 3. Return Success
        return NextResponse.json({
            success: true,
            data: data
        });

    } catch (error: any) {
        console.error('Download API Error:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
