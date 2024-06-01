import { DBBoardImage } from '@/type/board';
import { createClient } from '@/utility/supabase/server';

export const selectAllImage = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
    .from('board')
    .select('*');
    // .eq('user_id', (await supabase.auth.getUser()).data?.user?.id);
    return { data, error };
};
export const insertImage = async (image:DBBoardImage) => {
    const supabase = createClient();
    const { user } = (await supabase.auth.getUser()).data;
    const validObj = {
      ...image,
      user_id: user?.id,
    };
    const { data, error } = await supabase
    .from('board')
    .insert(validObj);
    return { data, error };
};
export const deleteImage = async (src:string) => {
    const supabase = createClient();
    const { error } = await supabase
    .from('board')
    .delete()
    .eq('img_src', src);
    return error;
};

export const deleteAllTag = async (tag:string) => {
  const supabase = createClient();
  const { error } = await supabase
  .from('board')
  .delete()
  .eq('tag', tag);
  return error;
};
export const editAllTag = async (originalTag:string, newTag:string) => {
  const supabase = createClient();
  if (newTag) {
    const { data, error } = await supabase
    .from('board')
    .update({ tag: newTag })
    .eq('tag', originalTag);
    return error;
  }
  return -1;
};
export const addImageFileToStorage = async (file:File | null) => {
  if (!file) {
    return -1;
  }
  const supabase = createClient();
  const { data, error } = await supabase
  .storage
  .from('board-image')
  .upload(file.name, file, {
    cacheControl: '3600',
    upsert: false,
  });
  return { data, error };
};
