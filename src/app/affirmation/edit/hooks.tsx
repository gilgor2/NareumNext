import {
  addNewPromise,
  deletePromise as deletePromiseAction,
  getPromiseList,
  updateRecentTranscriptTimeOld,
} from '@/action/affirmationAction';
import { NoticeContext } from '@/component/organism/common/NotificationBlockDispenser/hook';
import Promise from '@/domain/promise';
import { PromiseType } from '@/type/promise';
import { MAX_PROMISE_COUNT, NOTICE_MESSAGE } from '@/utility/constants';
import { useContext, useEffect, useState } from 'react';

// hook
export const usePromiseListEditPageState = () => {
  const [promiseList, setpromiseList] = useState<PromiseType[]>([]);
  const noticeStore = useContext(NoticeContext);
  const noticeWhenTooMuchPromise = () => {
    if (promiseList.length >= MAX_PROMISE_COUNT - 1) {
      noticeStore.openNoticeForMs(<div>{NOTICE_MESSAGE.ENTER_BEFORE_MAX}</div>, 3000);
    }
  };

  const addPromise = async (text: string) => {
    noticeWhenTooMuchPromise();
    setpromiseList((arr) => [...arr, new Promise(text)]);
    await addNewPromise(text);
  };

  const deletePromise = async (id: string) => {
    setpromiseList((arr: PromiseType[]) => arr.filter((promise) => promise.id !== id));
    await deletePromiseAction(id);
  };

  const initializePromiseList = async () => {
    setpromiseList(await getPromiseList());
  };

  let once = true;
  useEffect(() => {
    if (once) {
      initializePromiseList();
      updateRecentTranscriptTimeOld();
    }
    once = false;
  }, []);

  return {
    promiseList,
    addPromise,
    deletePromise,
  };
};
