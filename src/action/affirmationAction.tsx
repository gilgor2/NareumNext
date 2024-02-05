'use server';

// import { revalidatePath } from 'next/cache';
import { Promise } from '../type/promise';

export async function getPromiseList() {
        return [
            { text: '123', transcribeCnt: 0, id: '!' },
        ];
}

export async function createPromise(promise:string) {
    const newPromise:Promise = {
        text: promise,
        transcribeCnt: 0,
        id: '!2',
    };
    // revalidatePath('/affirmation', 'layout');
}

export async function deletePromise(id:string) {

}

export async function updatePromiseAddCnt() {

}

export async function updateRecentTranscriptTimeNow() {

}

export async function checkIsRecentTranscriptTimePassed() {
    return true;
}
