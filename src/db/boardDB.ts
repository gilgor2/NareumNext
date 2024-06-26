import { BoardImageType } from '@/type/board';
import { DBBoardImageFromBoardImage, boardImageFromDBBoardImage } from '@/utility/map/boardDBMapper';
import { createClient } from '@/utility/supabase/server';
import { throwWhenError, throwWhenWrongFormat } from '@/utility/utility';

export const selectAllImage = async ():Promise<BoardImageType[]> => {
    const supabase = createClient();

    const { data, error } = await supabase
    .from('board')
    .select('*');
    try {
      throwWhenError(error?.message);
      throwWhenWrongFormat<BoardImageType[]>(data as BoardImageType[], (d) => !!(!d || (d[0] && d[0].img_src && d[0].tag)));

      return data?.map(boardImageFromDBBoardImage) || [];
    } catch (e) {
      // catch
    }
    return [];
};

export const addImage = async (image:BoardImageType) => {
    const supabase = createClient();

    const { error } = await supabase
    .from('board')
    .insert(DBBoardImageFromBoardImage(image));

    try {
      throwWhenError(error?.message);
    } catch (e) {
      // catch
    }
};
export const deleteImage = async (src:string) => {
    const supabase = createClient();

    const { error } = await supabase
    .from('board')
    .delete()
    .eq('img_src', src);

    try {
      throwWhenError(error?.message);
    } catch (e) {
      // catch
    }
};

export const deleteAllTag = async (tag:string) => {
  const supabase = createClient();

  const { error } = await supabase
  .from('board')
  .delete()
  .eq('tag', tag);

  try {
    throwWhenError(error?.message);
  } catch (e) {
    // catch
  }
};
export const editAllTag = async (originalTag:string, newTag:string) => {
  const supabase = createClient();

  const { error } = await supabase
  .from('board')
  .update({ tag: newTag })
  .eq('tag', originalTag);

  try {
    throwWhenError(error?.message);
  } catch (e) {
    // catch
  }
};
export const addImageFileToStorage = async (file:File | null) => {
  if (!file) {
    return -1;
  }

  const supabase = createClient();

  const { error } = await supabase
  .storage
  .from('board-image')
  .upload(file.name, file, {
    cacheControl: '3600',
    upsert: false,
  });

  try {
    throwWhenError(error?.message);
  } catch (e) {
    // catch
  }
};
