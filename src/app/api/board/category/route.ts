import { deleteCategory, editCategory } from '@/action/boardAction';
import { categoriesFromRequest, categoryFromRequest } from '@/utility/map/boardAPIMapper';
import { NextRequest } from 'next/server';

export async function PUT(request:NextRequest) {
    const { originalCategory, newCategory } = await categoriesFromRequest(request);
    await editCategory(originalCategory, newCategory);

    return Response.json('', { status: 200 });
}

export async function DELETE(request:NextRequest) {
    await deleteCategory(await categoryFromRequest(request));
    return Response.json({ status: 200 });
}
