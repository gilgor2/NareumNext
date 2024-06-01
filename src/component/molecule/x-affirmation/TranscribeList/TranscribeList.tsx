'use client';

import React, { ReactNode, useContext, useState } from 'react';
import { Promise } from '@/type/promise';
import { updatePromiseAddCnt, updateRecentTranscriptTimeNow } from '@/action/affirmationAction';
import { NOTICE_MESSAGE } from '@/utility/constants';
import { NoticeContext } from '@/component/organism/common/NotificationBlockDispenser/hook';
import PromiseTranscribor from '../PromiseTranscribor/PromiseTranscribor';

export default function TranscribeList({ promiseList }:{ promiseList:Promise[] }) {
    const [currentTranscriborIndex, setcurrentTranscriborIndex] = useState(0);
    const noticeStore = useContext(NoticeContext);

    const onDoneEachPromise = (i: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
		setcurrentTranscriborIndex((index) => index + 1);
	};

  const onSubmit = async () => {
    updatePromiseAddCnt();
    updateRecentTranscriptTimeNow();
		noticeStore.openNoticeForMs(<div>{NOTICE_MESSAGE.WELL_DONE}</div>, 3000);
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