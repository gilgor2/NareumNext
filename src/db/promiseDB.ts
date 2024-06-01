import { DBPromise } from '@/type/promise';
import { createClient } from '@/utility/supabase/server';

export const selectAllPromise = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
    .from('promise')
    .select('*')
    .eq('user_id', (await supabase.auth.getUser()).data?.user?.id);
    return { data, error };
};

export const addPromise = async (promise:DBPromise) => {
  const supabase = createClient();
  const { user } = (await supabase.auth.getUser()).data;
    const validObj = {
      ...promise,
      user_id: user?.id,
    };
  const { error } = await supabase
  .from('promise')
  .insert(validObj);
  return error;
};

export const deletePromise = async (id:number) => {
    const supabase = createClient();
    const { error } = await supabase
    .from('promise')
    .delete()
    .eq('id', id);
  return error;
};

export const addAllCnt = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
  .from('promise')
  .select('*');
// Update each row individually
data?.forEach(async (row) => {
    await supabase
    .from('promise')
    .update({ transcribe_cnt: row.transcribe_cnt + 1 })
    .eq('id', row.id);
});

  return error;
};
