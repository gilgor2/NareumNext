import { DBPromise, PromiseType } from '@/type/promise';

export function DBPromiseFromPromise(promise:PromiseType) {
    const dbPromise:DBPromise = {
        text: promise.text,
        transcribe_cnt: promise.transcribeCnt,
    };
    return dbPromise;
 }

export function PromiseFromDBPromise(dbPromise:DBPromise) {
    const promise:PromiseType = {
        text: dbPromise.text,
        id: `${dbPromise.id}`,
        date: dbPromise.created_at,
        transcribeCnt: dbPromise.transcribe_cnt,
    };
    return promise;
 }
