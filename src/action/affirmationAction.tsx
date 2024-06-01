'use server';

import { revalidatePath } from 'next/cache';
import PromiseList from '@/domain/promise';
import Goal from '@/domain/goal';

export async function getPromiseList() {
    const promiseList = new PromiseList();
    return promiseList.getPromiseList();
}

export async function createPromise(promise:string) {
    if (promise) {
        const promiseList = new PromiseList();

        await promiseList.addPromise(promise);
        revalidatePath('/affirmation', 'layout');
    }
}

export async function deletePromise(id:string) {
    const promiseList = new PromiseList();

    await promiseList.deletePromise(id);
    revalidatePath('/affirmation');
}

export async function updatePromiseAddCnt() {
    const promiseList = new PromiseList();

    await promiseList.addAllPromiseCnt();
}

export async function updateRecentTranscriptTimeNow() {
    const goal = new Goal();

    goal.setrecentTranscriptTime(new Date());
    revalidatePath('/affirmation', 'layout');
}

export async function updateRecentTranscriptTimeOld() {
    const goal = new Goal();

    goal.setrecentTranscriptTime(new Date(0));
    revalidatePath('/affirmation', 'layout');
}

export async function checkIsRecentTranscriptTimePassed() {
    const goal = new Goal();

    const isPassed = await (goal.checkIsRecentTranscirptTimePassed());
    revalidatePath('/affirmation', 'layout');

    return isPassed;
}
