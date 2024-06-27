import { DBPromise, PromiseType } from '@/type/promise';
import { DBPromiseFromPromise, PromiseFromDBPromise } from '@/utility/map/promiseDBMapper';
import { createClient } from '@/utility/supabase/server';
import { throwWhenError, throwWhenWrongFormat } from '@/utility/utility';

export const selectAllPromise = async ():Promise<PromiseType[]> => {
    const supabase = createClient();

    try {
      const { data, error } = await supabase
      .from('promise')
      .select('*');

      throwWhenError(error?.message);
      throwWhenWrongFormat<DBPromise[]>(data as DBPromise[], (d) => !!((d[0] && !!d[0].text && !!(d[0].transcribe_cnt || d[0].transcribe_cnt === 0))));

      return data?.map(PromiseFromDBPromise) || [];
    } catch (e) {
      console.log(e);
    }
    return [];
};

export const addPromise = async (promise:PromiseType) => {
  const supabase = createClient();

  try {
    const { error } = await supabase
    .from('promise')
    .insert(DBPromiseFromPromise(promise));

    throwWhenError(error?.message);
  } catch (e) {
      console.log(e);
  }
};

export const deletePromise = async (id:number) => {
    const supabase = createClient();

    const { error } = await supabase
    .from('promise')
    .delete()
    .eq('id', id);

    try {
      throwWhenError(error?.message);
    } catch (e) {
      console.log(e);
    }
};

export const addAllCnt = async () => {
    const supabase = createClient();

    const promiseList = await selectAllPromise();

    try {
    promiseList.forEach(async (row) => {
      const { error } = await supabase
      .from('promise')
      .update({ transcribe_cnt: row.transcribeCnt + 1 })
      .eq('id', row.id);
      throwWhenError(error?.message);
    });
  } catch (e) {
    console.log(e);
  }
};
