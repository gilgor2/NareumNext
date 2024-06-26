'use client';

import React, { useContext, useState } from 'react';
import { PromiseType } from '@/type/promise';
import { updatePromiseAddCnt, updateRecentTranscriptTimeNow } from '@/action/affirmationAction';
import { NOTICE_MESSAGE } from '@/utility/constants';
import { NoticeContext } from '@/component/organism/common/NotificationBlockDispenser/hook';
import PromiseTranscribor from '../PromiseTranscribor/PromiseTranscribor';

type Props = {
  promiseList: PromiseType[];
};

export default function TranscriberList({ promiseList }: Props) {
  const noticeStore = useContext(NoticeContext);
  const [currentTranscriborIndex, setcurrentTranscriborIndex] = useState(0);

  const moveToNextTranscriber = () => {
    setcurrentTranscriborIndex((index) => index + 1);
  };

  const onLastTranscribeDone = async () => {
    noticeStore.openNoticeForMs(<div>{NOTICE_MESSAGE.WELL_DONE}</div>, 2000);
    await updatePromiseAddCnt();
    await updateRecentTranscriptTimeNow();
  };

  return (
    <>
      {promiseList.map((promise, i) => (
        <PromiseTranscribor
          key={promise.id}
          isFocused={i === currentTranscriborIndex}
          text={promise.text}
          onDone={i < promiseList.length - 1 ? moveToNextTranscriber : onLastTranscribeDone}
        />
      ))}
    </>
  );
}
