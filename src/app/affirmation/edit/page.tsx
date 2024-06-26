'use client';

import PromiseUploader from '@/component/molecule/x-affirmation/PromiseUploader/PromiseUploader';
import { MAX_PROMISE_COUNT } from '@/utility/constants';
import Link from 'next/link';
import ActionButton from '@/component/atom/common/ActionButton/ActionButton';
import PromisePresenter from '../../../component/molecule/x-affirmation/PromisePresenter/PromisePresenter';
import { usePromiseListEditPageState } from './hooks';

export default function EditPage() {
  const { promiseList, addPromise, deletePromise } = usePromiseListEditPageState();

  return (
    <div className="flex w-[580px] flex-col gap-10 pr-[10rem]">
      {promiseList.map((promise, i) => (
        <PromisePresenter
          key={`${i}`}
          promiseId={promise.id}
          promise={promise.text}
          deletePromise={deletePromise}
        />
      ))}

      {promiseList.length < MAX_PROMISE_COUNT && <PromiseUploader addPromise={addPromise} />}

      <Link href="/affirmation/transcribe">
        <ActionButton className="w-[5rem absolute right-10 top-[calc(50%-40px)]">완료</ActionButton>
      </Link>
    </div>
  );
}
