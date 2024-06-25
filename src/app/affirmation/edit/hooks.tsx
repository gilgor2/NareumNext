import { PromiseType } from '@/type/promise';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const usePromiseListEditPageState = () => {
  const [promiseList, setpromiseList] = useState<PromiseType[]>([]);

  const addPromise = async (text: string) => {
    const newPromise: PromiseType = {
      text,
      transcribeCnt: 0,
      date: new Date(),
      id: 'tmp',
    };
    setpromiseList((arr) => [...arr, newPromise]);
    await axios.post(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/promiseList`, {
      data: { promise: text },
    });
  };

  const deletePromise = async (id: string) => {
    setpromiseList((arr: PromiseType[]) => {
      const tmpArr = [...arr];
      tmpArr.splice(
        tmpArr.findIndex((p) => p.id === id),
        1,
      );
      return tmpArr;
    });
    await axios.delete(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/promiseList`, { data: { id } });
  };

  const initializePromiseList = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/promiseList`);
    setpromiseList(response.data);
  };
  const initializeRecentTranscriptTime = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/goal`);
  };

  let once = true;
  useEffect(() => {
    if (once) {
      initializePromiseList();
      initializeRecentTranscriptTime();
    }
    once = false;
  }, []);

  return {
    promiseList,
    addPromise,
    deletePromise,
  };
};
