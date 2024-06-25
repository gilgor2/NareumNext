import { DBGoal } from '@/type/goal';

export function transcribeTimeFromDBGoal(dbGoal:DBGoal):string {
    if (typeof dbGoal.recent_transcript_time === 'string') {
        return dbGoal.recent_transcript_time;
    }
    return dbGoal.recent_transcript_time.toString();
}

export function DBGoalFromTranscribeTime(date:string | Date):DBGoal {
    if (typeof date === 'string') {
        return { recent_transcript_time: new Date(date) };
    }
    return { recent_transcript_time: date };
}
