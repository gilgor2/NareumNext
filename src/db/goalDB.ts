import { DBGoal } from '@/type/goal';
import { DBGoalFromTranscribeTime, transcribeTimeFromDBGoal } from '@/utility/map/goalDBMapper';
import { createClient } from '@/utility/supabase/server';
import { throwWhenError, throwWhenWrongFormat } from '@/utility/utility';

export const selectTranscribeTime = async ():Promise<string | null> => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
    .from('goals')
    .select('recent_transcript_time');

    throwWhenError(error?.message);
    throwWhenWrongFormat<DBGoal[]>(data as DBGoal[], (d) => !!((d[0] && d[0].recent_transcript_time) || !d[0]));

    const selectedGoalList:DBGoal[] = data as DBGoal[];
    if (selectedGoalList[0]) {
      return transcribeTimeFromDBGoal(selectedGoalList[0]);
    }
  } catch (e) {
    console.log(e);
  }

  return null;
};

export const createGoal = async ():Promise<Date> => {
    const supabase = createClient();

    const now = new Date();

    try {
      const { error } = await supabase
      .from('goals')
      .insert([
        DBGoalFromTranscribeTime(now),
      ]);

      throwWhenError(error?.message);

      return now;
    } catch (e) {
      console.log(e);
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
    console.log(e);
  }
};
