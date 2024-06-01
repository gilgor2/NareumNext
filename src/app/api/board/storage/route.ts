import { addImageFileToStorage } from '@/db/boardDB';
import { NextRequest } from 'next/server';

export async function POST(request:NextRequest) {
    const req = await request.formData();
    const file = req.get('file') as File;
     const response = await addImageFileToStorage(file);
    return Response.json({ response, status: 200 });
}
