import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { checkIsRecentTranscriptTimePassed, getPromiseList } from '../../../action/affirmationAction';
import TranscribeList from '../../../component/molecule/x-affirmation/TranscribeList/TranscribeList';
import ActionButton from '../../../component/atom/common/ActionButton/ActionButton';

export default async function TranscribePage() {
    const promiseList = await getPromiseList();
    const isTranscribedAlready = await checkIsRecentTranscriptTimePassed();
    // redirect
    if (promiseList.length === 0) {
        redirect('/affirmation/edit');
    }
    if (isTranscribedAlready) {
        redirect('/affirmation/exhibit');
    }

  return (
    <div className="relative">
      <TranscribeList promiseList={promiseList} />
      <Link href="/affirmation/edit">
        <ActionButton className="w-[40px] top-[calc(50%-40px)]absolute right-10">

          수정
        </ActionButton>
      </Link>
    </div>
  );
}
