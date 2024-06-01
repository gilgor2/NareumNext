import { createGoal, selectTranscribeTime, updateTranscriptTime } from '@/db/goalDB';
import { RE_TRANSCRIBE_TIME_MS } from '@/utility/constants';

class Goal {
    recentTranscriptTime = new Date();

    async updateRecentTranscriptTimeFromDB() {
       const { data, error } = await selectTranscribeTime();
       if (data && data[0]) {
        const date = new Date(data[0].recent_transcript_time);
        this.recentTranscriptTime = date;
       } else {
        await createGoal();
        this.recentTranscriptTime = new Date();
       }
    }

    async setrecentTranscriptTime(date:Date) {
        this.recentTranscriptTime = date;
        await updateTranscriptTime(this.recentTranscriptTime);
    }

    async checkIsRecentTranscirptTimePassed() {
        await this.updateRecentTranscriptTimeFromDB();

        const recent = this.recentTranscriptTime.getTime();
        const now = new Date().getTime();

        return now > (recent || 0) + RE_TRANSCRIBE_TIME_MS;
    }
}
export default Goal;
