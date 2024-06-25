'use client';

import React, { ReactNode, useContext, useState } from 'react';
import { PromiseType } from '@/type/promise';
import { updatePromiseAddCnt, updateRecentTranscriptTimeNow } from '@/action/affirmationAction';
import { NOTICE_MESSAGE } from '@/utility/constants';
import { NoticeContext } from '@/component/organism/common/NotificationBlockDispenser/hook';
import PromiseTranscribor from '../PromiseTranscribor/PromiseTranscribor';

export default function TranscribeList({ promiseList }: { promiseList: PromiseType[] }) {
  const [currentTranscriborIndex, setcurrentTranscriborIndex] = useState(0);
  const noticeStore = useContext(NoticeContext);

  const onDoneEachPromise = (i: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    setcurrentTranscriborIndex((index) => index + 1);
  };

  const onSubmit = async () => {
    noticeStore.openNoticeForMs(<div>{NOTICE_MESSAGE.WELL_DONE}</div>, 2000);
    await updatePromiseAddCnt();
    await updateRecentTranscriptTimeNow();
  };
  return (
    <>
      {promiseList.map((promise, i) => (
        <PromiseTranscribor
          isFocused={i === currentTranscriborIndex}
          key={promise.id}
          text={promise.text}
          onDone={i < promiseList.length - 1 ? onDoneEachPromise(i) : onSubmit}
        />
      ))}
    </>
  );
}
