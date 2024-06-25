import { addImageFileToStorage } from '@/db/boardDB';
import { fileFromRequest } from '@/utility/map/boardAPIMapper';
import { NextRequest } from 'next/server';

export async function POST(request:NextRequest) {
    await addImageFileToStorage(await fileFromRequest(request));

    return Response.json('', { status: 200 });
}
