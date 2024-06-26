import {
  addNewPromise,
  deletePromise as deletePromiseAction,
  getPromiseList,
  updateRecentTranscriptTimeOld,
} from '@/action/affirmationAction';
import Promise from '@/domain/promise';
import { PromiseType } from '@/type/promise';
import { useEffect, useState } from 'react';

// hook
export const usePromiseListEditPageState = () => {
  const [promiseList, setpromiseList] = useState<PromiseType[]>([]);

  const addPromise = async (text: string) => {
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
