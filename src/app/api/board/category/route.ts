import { deleteCategory, editCategory } from '@/action/boardAction';
import { NextRequest } from 'next/server';

export async function PUT(request:NextRequest) {
    const { data } = await request.json();
    const { originalCategory, newCategory } = data;
     const response = await editCategory(originalCategory, newCategory);
    return Response.json({ response, status: 200 });
}

export async function DELETE(request:NextRequest) {
    const { category } = await request.json();
    await deleteCategory(category);
    return Response.json({ status: 200 });
}
