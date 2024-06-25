import { createGoal, selectTranscribeTime, updateTranscriptTime } from '@/db/goalDB';
import { GoalDomainType } from '@/type/goal';
import { RE_TRANSCRIBE_TIME_MS } from '@/utility/constants';

class Goal implements GoalDomainType {
    recentTranscriptTime = new Date();
    // 다른 목표 차후 추가

    async initRecentTranscriptTimeFromDB() {
       const recentTranscriptTime = await selectTranscribeTime();

       if (recentTranscriptTime) {
        this.recentTranscriptTime = new Date(recentTranscriptTime);
       } else {
        const now = await createGoal();
        this.recentTranscriptTime = now;
       }

       return this;
    }

    async setrecentTranscriptTimeNow() {
        await updateTranscriptTime(new Date());
        return this;
    }

    async setrecentTranscriptTimeOld() {
        await updateTranscriptTime(new Date(0));
        return this;
    }

    async checkIsRecentTranscriptTimePassed() {
        await this.initRecentTranscriptTimeFromDB();

        const recent = this.recentTranscriptTime.getTime();
        const now = new Date().getTime();

        return now > (recent || 0) + RE_TRANSCRIBE_TIME_MS;
    }
}
export default Goal;
