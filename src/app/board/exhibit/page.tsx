import { getBoardData } from '@/action/boardAction';
import ActionButton from '@/component/atom/common/ActionButton/ActionButton';
import VisionBoard from '@/component/organism/x-board/VisionBoard/VisionBoard';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function ExhibitSection() {
  const boardData = await getBoardData();

  // redirect
  if (!Object.keys(boardData)[0]) {
    redirect('/board/edit');
  }

  return (
    <div className="relatve h-[100%] w-[100%] pr-[10rem]">
      <VisionBoard boardData={boardData} />

      <Link href="/board/edit">
        <ActionButton className="absolute right-10 top-[calc(50%-40px)] w-[5rem]">
          수정
        </ActionButton>
      </Link>
    </div>
  );
}
