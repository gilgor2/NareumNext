import { deleteImage, getBoardData, insertBoardImage } from '@/action/boardAction';
import { NextRequest } from 'next/server';

export async function GET(request:NextRequest) {
    const boardData = await getBoardData();
    return Response.json(boardData, { status: 200 });
}

export async function POST(request:NextRequest) {
    const { data } = await request.json();

     const response = await insertBoardImage(data);
    return Response.json({ status: 200 });
}

export async function DELETE(request:NextRequest) {
    const { src } = await request.json();
    await deleteImage(src);
    return Response.json({ status: 200 });
}
