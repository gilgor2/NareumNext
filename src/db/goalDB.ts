import { DBGoal } from '@/type/goal';
import { DBGoalFromTranscribeTime, transcribeTimeFromDBGoal } from '@/utility/map/goalDBMapper';
import { createClient } from '@/utility/supabase/server';
import { throwWhenError, throwWhenWrongFormat } from '@/utility/utility';

export const selectTranscribeTime = async ():Promise<string | null> => {
  const supabase = createClient();

  const { data, error } = await supabase
  .from('goals')
  .select('recent_transcript_time');

  try {
    throwWhenError(error?.message);
    throwWhenWrongFormat<DBGoal[]>(data as DBGoal[], (d) => !!((d[0] && d[0].recent_transcript_time) || !d[0]));

    const selectedGolList:DBGoal[] = data as DBGoal[];
    if (selectedGolList[0]) {
      return transcribeTimeFromDBGoal(selectedGolList[0]);
    }
  } catch (e) {
    // catch
  }

  return null;
};

export const createGoal = async ():Promise<Date> => {
    const supabase = createClient();

    const now = new Date();
    const { error } = await supabase
    .from('goals')
    .insert([
      DBGoalFromTranscribeTime(now),
    ]);

    try {
      throwWhenError(error?.message);
    } catch (e) {
      // catch
    }

    return now;
};

export const updateTranscriptTime = async (date:Date) => {
  const supabase = createClient();

  const { error } = await supabase
  .from('goals')
  .update(
    DBGoalFromTranscribeTime(date),
  )
  .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
  .select();

  try {
    throwWhenError(error?.message);
  } catch (e) {
    // catch
  }
};
