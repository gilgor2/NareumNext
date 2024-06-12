import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { revalidatePath } from 'next/cache';
import {
  checkIsRecentTranscriptTimePassed,
  getPromiseList,
} from '../../../action/affirmationAction';
import TranscribeList from '../../../component/molecule/x-affirmation/TranscribeList/TranscribeList';
import ActionButton from '../../../component/atom/common/ActionButton/ActionButton';

export default async function TranscribePage() {
  const promiseList = await getPromiseList();
  const isTranscribedNeeded = await checkIsRecentTranscriptTimePassed();
  if (promiseList.length === 0) {
    redirect('/affirmation/edit');
  }
  if (isTranscribedNeeded === false) {
    revalidatePath('/affirmation/exhibit', 'page');
    redirect('/affirmation/exhibit');
  }

  return (
    <>
      <div className="relative">
        <TranscribeList promiseList={promiseList} />
      </div>
      <Link href="/affirmation/edit">
        <ActionButton className="absolute right-10 top-[calc(50%-40px)] w-[40px]">
          수정
        </ActionButton>
      </Link>
    </>
  );
}
