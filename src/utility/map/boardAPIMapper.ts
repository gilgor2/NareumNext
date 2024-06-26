import { BoardDataGetReponseType, BoardDeleteRequestType, BoardImage, BoardPostRequestType, CategoryDeleteRequestType, CategoryObj, CategoryPutRequestType } from '@/type/board';
import { NextRequest } from 'next/server';
import { throwWhenWrongFormat } from '../utility';

export async function responseFromBoardData(boardData:CategoryObj[]):Promise<BoardDataGetReponseType> {
    return { data: boardData };
}

export async function boardImageFromPostRequest(req:NextRequest):Promise<BoardImage> {
    try {
        const requestData:BoardPostRequestType = await req.json();

        throwWhenWrongFormat(requestData, (d:BoardPostRequestType) => !!(d.data.img_src && d.data.tag));

        return requestData.data;
    } catch (e) {
        // catch
    }

    return { tag: 'error', img_src: 'error', id: 'error' };
}

export async function srcFromDeleteRequest(req:NextRequest):Promise<string> {
    try {
        const requestData:BoardDeleteRequestType = await req.json();

        throwWhenWrongFormat<BoardDeleteRequestType>(requestData, (d:BoardDeleteRequestType) => !!(d.src));

        return requestData.src;
    } catch (e) {
        // catch
    }

    return '';
}

export async function fileFromRequest(req:NextRequest) {
    const file = (await req.formData()).get('file') as File;
    return file;
}

export async function categoriesFromRequest(req:NextRequest) {
    try {
        const requestData:CategoryPutRequestType = await req.json();

        throwWhenWrongFormat<CategoryPutRequestType>(requestData, (d:CategoryPutRequestType) => !!(d.newCategory && d.originalCategory));

        return {
            originalCategory: requestData.originalCategory,
            newCategory: requestData.newCategory,
        };
    } catch (e) {
        // catch
    }

    return {
        originalCategory: '',
        newCategory: '',
    };
}

export async function categoryFromRequest(req:NextRequest) {
        try {
        const requestData:CategoryDeleteRequestType = await req.json();

        throwWhenWrongFormat<CategoryDeleteRequestType>(requestData, (d:CategoryDeleteRequestType) => !!(d.category));

        return requestData.category;
    } catch (e) {
        // catch
    }

    return '';
}
