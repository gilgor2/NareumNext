import { createClient } from '@/utility/supabase/server';
import { revalidatePath } from 'next/cache';

export const revalidate = 0;

export const createGoal = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
    .from('goals')
    .insert([
      { recent_transcript_time: new Date() },
    ]);

    return error;
};

export const updateTranscriptTime = async (date:Date) => {
  const supabase = createClient();
  const { data, error } = await supabase
  .from('goals')
  .update(
    { recent_transcript_time: date },
  )
  .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
  .select();
  return error;
};

export const selectTranscribeTime = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
    .from('goals')
    .select('recent_transcript_time');

    return { data, error };
};
