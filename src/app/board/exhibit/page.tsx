import { getBoardData } from '@/action/boardAction';
import ActionButton from '@/component/atom/common/ActionButton/ActionButton';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function ExhibitSection() {
  const boardData = await getBoardData();

  // redirect
  if (!Object.keys(boardData)[0]) {
      redirect('/board/edit');
  }

	return (
  <div className="relative">
    <Image src="https://picsum.photos/200" alt="asd" width="200" height="200" />

    <Link href="/board/edit">
      <ActionButton className="w-[40px] top-[calc(50%-40px)] absolute right-10">
        수정
      </ActionButton>
    </Link>
  </div>
	);
}
