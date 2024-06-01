import { createPromise, deletePromise, getPromiseList } from '@/action/affirmationAction';
import { NextRequest } from 'next/server';

export async function GET(request:NextRequest) {
    const promiseList = await getPromiseList();
    return Response.json(promiseList, { status: 200 });
}

export async function POST(request:NextRequest) {
    const { data } = await request.json();
     await createPromise(data.promise);
    return Response.json({ status: 200 });
}

export async function DELETE(request:NextRequest) {
    const { id } = await request.json();
    await deletePromise(id);
    return Response.json({ status: 200 });
}
