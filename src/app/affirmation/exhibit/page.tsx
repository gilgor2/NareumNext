import { checkIsRecentTranscriptTimePassed, getPromiseList } from '@/action/affirmationAction';
import ActionButton from '@/component/atom/common/ActionButton/ActionButton';
import PaintingDiagonal from '@/component/organism/x-affirmation/PaintingDiagonal/PaintingDiagonal';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function ExhibitSection() {
  const promiseList = await getPromiseList();
  const isTranscribedNeeded = await checkIsRecentTranscriptTimePassed();

  // redirect
  if (promiseList.length === 0) {
    redirect('/affirmation/edit');
  }
  if (isTranscribedNeeded) {
    revalidatePath('/affirmation/transcribe', 'page');
    redirect('/affirmation/transcribe');
  }

  // 여러 화면을 랜덤으로 띄워주는 역할
  return (
    <div className="relative pr-[10rem]">
      <PaintingDiagonal promiseList={promiseList} />
      <div className="w-[60px]" />
      <Link href="/affirmation/edit">
        <ActionButton className="absolute right-10 top-[calc(50%-40px)] w-[5rem]">
          수정
        </ActionButton>
      </Link>
    </div>
  );
}
