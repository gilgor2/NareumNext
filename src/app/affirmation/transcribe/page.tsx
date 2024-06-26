import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { revalidatePath } from 'next/cache';
import {
  checkIsRecentTranscriptTimePassed,
  getPromiseList,
  updatePromiseAddCnt,
  updateRecentTranscriptTimeNow,
} from '../../../action/affirmationAction';
import TranscriberList from '../../../component/molecule/x-affirmation/TranscriberList/TranscriberList';
import ActionButton from '../../../component/atom/common/ActionButton/ActionButton';

const onDoneTranscribe = async () => {
  'use server';

  await updatePromiseAddCnt();
  await updateRecentTranscriptTimeNow();

  // noticeBlock은 transcriberList(client component)에서 관리
  redirect('/affirmation/exhibit');
};

export default async function TranscribePage() {
  const promiseList = await getPromiseList();

  // redirect on conditions
  if (promiseList.length === 0) {
    redirect('/affirmation/edit');
  }

  const isTranscribeNeeded = await checkIsRecentTranscriptTimePassed();
  if (!isTranscribeNeeded) {
    redirect('/affirmation/exhibit');
  }

  return (
    <>
      <div className="relative pr-[10rem]">
        <TranscriberList promiseList={promiseList} onDone={onDoneTranscribe} />
      </div>
      <Link href="/affirmation/edit">
        <ActionButton className="absolute right-10 top-[calc(50%-40px)] w-[5rem]">
          수정
        </ActionButton>
      </Link>
    </>
  );
}
