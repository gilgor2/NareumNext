'use server';

import { revalidatePath } from 'next/cache';
import PromiseList from '@/domain/promiseList';
import Goal from '@/domain/goal';
import { PromiseType } from '@/type/promise';

export async function getPromiseList() {
  const promiseList = new PromiseList();

  return promiseList.getPromiseList();
}

export async function addNewPromise(promise: PromiseType) {
  if (promise.text) {
    const promiseList = new PromiseList();

    await promiseList.addPromise(promise);

    revalidatePath('/affirmation', 'layout');
  }
}

export async function deletePromise(id: string) {
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

  goal.setrecentTranscriptTimeNow();

  revalidatePath('/affirmation', 'layout');
}

export async function updateRecentTranscriptTimeOld() {
  const goal = new Goal();

  goal.setrecentTranscriptTimeOld();

  revalidatePath('/affirmation', 'layout');
}

export async function checkIsRecentTranscriptTimePassed() {
  const goal = new Goal();

  const isPassed = await goal.checkIsRecentTranscriptTimePassed();

  revalidatePath('/affirmation', 'layout');

  return isPassed;
}
