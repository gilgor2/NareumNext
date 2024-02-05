'use client';

import { Promise } from '@/type/promise';
import PromiseUploader from '@/component/molecule/x-affirmation/PromiseUploader/PromiseUploader';
import { MAX_PROMISE_COUNT } from '@/utility/constants';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ActionButton from '@/component/atom/common/ActionButton/ActionButton';
import PromisePresenter from '../../../component/molecule/x-affirmation/PromisePresenter/PromisePresenter';

export default function EditPage() {
    const [promiseList, setpromiseList] = useState<Promise[]>([]);
    const initializePromiseList = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/promiseList-all`).then((res) => res.json());
        setpromiseList(response);
      };
    useEffect(() => {
        initializePromiseList();
    }, []);
  return (
    <div className="flex flex-col gap-10 ">
      {promiseList.map((promise) => (
        <PromisePresenter
          key={promise.id}
          promise={promise.text}
          promiseId={promise.id}
        />
			))}

      {promiseList.length < MAX_PROMISE_COUNT && (
      <PromiseUploader />
			)}
      <Link href="/affirmation/transcribe">
        <ActionButton className="w-[40px] absolute right-10 top-[calc(50%-40px)]">
          수정
        </ActionButton>
      </Link>
    </div>
  );
}
