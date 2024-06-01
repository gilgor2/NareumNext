import { updateRecentTranscriptTimeOld } from '@/action/affirmationAction';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request:NextRequest) {
    await updateRecentTranscriptTimeOld();
    return Response.json({ status: 200 });
}
