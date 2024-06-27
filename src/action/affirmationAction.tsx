'use server';

import { revalidatePath } from 'next/cache';
import PromiseList from '@/domain/promiseList';
import Goal from '@/domain/goal';
import Promise from '@/domain/promise';

export async function getPromiseList() {
  const promiseList = new PromiseList();

  return promiseList.getPromiseList();
}

export async function addNewPromise(promise: string) {
  if (promise) {
    const promiseList = new PromiseList();

    await promiseList.addPromise(new Promise(promise));

    revalidatePath('/affirmation', 'layout');
  }
}

export async function deletePromise(id: string) {
  const promiseList = new PromiseList();

  await promiseList.deletePromise(id);

  revalidatePath('/affirmation', 'layout');
}

export async function updatePromiseAddCnt() {
  const promiseList = new PromiseList();

  await promiseList.addAllPromiseCnt();
}

export async function updateRecentTranscriptTimeNow() {
  const goal = new Goal();

  await goal.setrecentTranscriptTimeNow();

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
