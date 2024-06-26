export type TranscriptTimeType = {
    recentTranscriptTime:Date
};
export type TranscriptTimeDomainType = TranscriptTimeType & {
    initRecentTranscriptTimeFromDB():void
    setrecentTranscriptTimeNow():void
    setrecentTranscriptTimeOld():void
    checkIsRecentTranscriptTimePassed():Promise<boolean>
};
export type GoalDomainType = TranscriptTimeDomainType; // 이후 목표 추가 고려

export type DBGoal = {
    id?:number
    recent_transcript_time:string | Date
};
