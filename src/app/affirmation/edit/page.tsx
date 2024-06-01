'use client';

import PromiseUploader from '@/component/molecule/x-affirmation/PromiseUploader/PromiseUploader';
import { MAX_PROMISE_COUNT, NOTICE_MESSAGE } from '@/utility/constants';
import Link from 'next/link';
import ActionButton from '@/component/atom/common/ActionButton/ActionButton';
import { useContext, useEffect } from 'react';
import { NoticeContext } from '@/component/organism/common/NotificationBlockDispenser/hook';
import PromisePresenter from '../../../component/molecule/x-affirmation/PromisePresenter/PromisePresenter';
import { usePromiseListEditPageState } from './hooks';

export default function EditPage() {
  const {
    promiseList, addPromise, deletePromise,
   } = usePromiseListEditPageState();
   const noticeStore = useContext(NoticeContext);

    useEffect(() => {
      if (promiseList.length >= MAX_PROMISE_COUNT) {
        noticeStore.openNoticeForMs(<div>{NOTICE_MESSAGE.ENTER_BEFORE_MAX}</div>, 3000);
      }
    }, [promiseList.length]);

  return (
    <div className="flex flex-col gap-10 w-[580px]">
      {promiseList.map((promise, i) => (
        <PromisePresenter
          key={`${i}`}
          promiseId={promise.id}
          promise={promise.text}
          deletePromise={deletePromise}
        />
			))}

      {promiseList.length < MAX_PROMISE_COUNT && (
      <PromiseUploader addPromise={addPromise} />
			)}

      <Link href="/affirmation/transcribe">
        <ActionButton className="w-[40px] absolute right-10 top-[calc(50%-40px)]">
          완료
        </ActionButton>
      </Link>
    </div>
  );
}
