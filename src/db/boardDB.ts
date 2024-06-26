import { BoardImageType } from '@/type/board';
import { DBBoardImageFromBoardImage, boardImageFromDBBoardImage } from '@/utility/map/boardDBMapper';
import { createClient } from '@/utility/supabase/server';
import { throwWhenError, throwWhenWrongFormat } from '@/utility/utility';

export const selectAllImage = async ():Promise<BoardImageType[]> => {
    const supabase = createClient();

    try {
      const { data, error } = await supabase
      .from('board')
      .select('*');

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
  console.log(DBBoardImageFromBoardImage(image));
    try {
      const { error } = await supabase
      .from('board')
      .insert(DBBoardImageFromBoardImage(image));

      throwWhenError(error?.message);
    } catch (e) {
      // catch
    }
};
export const deleteImage = async (src:string) => {
    const supabase = createClient();

    try {
      const { error } = await supabase
      .from('board')
      .delete()
      .eq('img_src', src);

      throwWhenError(error?.message);
    } catch (e) {
      // catch
    }
};

export const deleteAllTag = async (tag:string) => {
  const supabase = createClient();

  try {
    const { error } = await supabase
    .from('board')
    .delete()
    .eq('tag', tag);

    throwWhenError(error?.message);
  } catch (e) {
    // catch
  }
};
export const editAllTag = async (originalTag:string, newTag:string) => {
  const supabase = createClient();

  try {
    const { error } = await supabase
    .from('board')
    .update({ tag: newTag })
    .eq('tag', originalTag);

    throwWhenError(error?.message);
  } catch (e) {
    // catch
  }
};
export const addImageFileToStorage = async (file:File | null) => {
  if (!file) {
    return null;
  }

  const supabase = createClient();

  try {
    const { data, error } = await supabase
    .storage
    .from('board-image')
    .upload(file.name, file, {
      cacheControl: '3600',
      upsert: false,
    });

    throwWhenError(error?.message);

    return data?.path || null;
  } catch (e) {
    // catch
  }
};
