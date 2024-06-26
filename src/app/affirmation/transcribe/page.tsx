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

const moveToEditPageIf = (condition: boolean) => {
  if (condition) {
    // redirect('/affirmation/edit');
  }
};
const moveToExhibitPageIfNeeded = async () => {
  const isTranscribedNeeded = await checkIsRecentTranscriptTimePassed();
  if (!isTranscribedNeeded) {
    // revalidatePath('/affirmation/exhibit', 'page');
    // redirect('/affirmation/exhibit');
  }
};
const onDoneTranscribe = async () => {
  await updatePromiseAddCnt();
  await updateRecentTranscriptTimeNow();
};

export default async function TranscribePage() {
  const promiseList = await getPromiseList();

  moveToEditPageIf(promiseList.length === 0);
  moveToExhibitPageIfNeeded();

  return (
    <>
      <div className="relative pr-[10rem]">
        <TranscriberList promiseList={promiseList} />
      </div>
      <Link href="/affirmation/edit">
        <ActionButton className="absolute right-10 top-[calc(50%-40px)] w-[5rem]">
          수정
        </ActionButton>
      </Link>
    </>
  );
}
