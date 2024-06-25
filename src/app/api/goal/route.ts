import { updateRecentTranscriptTimeOld } from '@/action/affirmationAction';
import { NextRequest } from 'next/server';

export async function POST(request:NextRequest) {
    await updateRecentTranscriptTimeOld();

    return Response.json('', { status: 200 });
}
