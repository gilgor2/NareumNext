import { addNewBoardImage, deleteImage, getBoardData } from '@/action/boardAction';
import { boardImageFromPostRequest, responseFromBoardData, srcFromDeleteRequest } from '@/utility/map/boardAPIMapper';
import { NextRequest } from 'next/server';

export async function GET(request:NextRequest) {
    const { data } = await responseFromBoardData(await getBoardData());
    return Response.json(data, { status: 200 });
}

export async function POST(request:NextRequest) {
    await addNewBoardImage(await boardImageFromPostRequest(request));

    return Response.json({ status: 200 });
}

export async function DELETE(request:NextRequest) {
    await deleteImage(await srcFromDeleteRequest(request));

    return Response.json({ status: 200 });
}
