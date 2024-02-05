import { getPromiseList } from '@/action/affirmationAction';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request:NextRequest) {
    const promiseList = await getPromiseList();
    return Response.json(promiseList, { status: 200 });
}
