import { addNewPromise, deletePromise, getPromiseList } from '@/action/affirmationAction';
import { idFromRequest, promiseFromRequest, responseFromPromiseList } from '@/utility/map/promiseListAPIMapper';
import { NextRequest } from 'next/server';

export async function GET(request:NextRequest) {
    const { data } = await responseFromPromiseList(await getPromiseList());
    return Response.json(data, { status: 200 });
}

export async function POST(request:NextRequest) {
    await addNewPromise(await promiseFromRequest(request));

    return Response.json('', { status: 200 });
}

export async function DELETE(request:NextRequest) {
    await deletePromise(await idFromRequest(request));

    return Response.json('', { status: 200 });
}
