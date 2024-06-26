import { PromiseListDeleteRequestType, PromiseListGetReponseType, PromiseListPostRequestType, PromiseType } from '@/type/promise';
import { NextRequest } from 'next/server';
import { default as PromiseDomain } from '@/domain/promise';
import { throwWhenWrongFormat } from '../utility';

export async function promiseFromRequest(req:NextRequest) {
    let text = '';

    try {
        const requestData:PromiseListPostRequestType = await req.json();

        throwWhenWrongFormat(requestData, (d:PromiseListPostRequestType) => !!(d.data && d.data.promise));

        text = requestData.data.promise;
    } catch (e) {
        // catch
    }
    return text;
}
export async function idFromRequest(req:NextRequest) {
    let id = '';

    try {
        const requestData:PromiseListDeleteRequestType = await req.json();

        throwWhenWrongFormat(requestData, (d:PromiseListDeleteRequestType) => !!(d.id));

        id = requestData.id;
    } catch (e) {
        // catch
    }
    return id;
}

export async function responseFromPromiseList(promiseList:PromiseType[]):Promise<PromiseListGetReponseType> {
    return { data: promiseList };
}
