import { DBPromise, PromiseType } from '@/type/promise';
import { DBPromiseFromPromise, PromiseFromDBPromise } from '@/utility/map/promiseDBMapper';
import { createClient } from '@/utility/supabase/server';
import { throwWhenError, throwWhenWrongFormat } from '@/utility/utility';

export const selectAllPromise = async ():Promise<PromiseType[]> => {
    const supabase = createClient();

    const { data, error } = await supabase
    .from('promise')
    .select('*');

    try {
      throwWhenError(error?.message);
      throwWhenWrongFormat<DBPromise[]>(data as DBPromise[], (d) => !!(!d || (d[0] && d[0].text && d[0].transcribe_cnt)));

      return data?.map(PromiseFromDBPromise) || [];
    } catch (e) {
      // catch
    }
    return [];
};

export const addPromise = async (promise:PromiseType) => {
  const supabase = createClient();

  const { error } = await supabase
  .from('promise')
  .insert(DBPromiseFromPromise(promise));

  try {
    throwWhenError(error?.message);
  } catch (e) {
    // catch
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
      // catch
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
    // catch
  }
};
