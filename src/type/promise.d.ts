export type Promise = {
	text: string;
	date?: Date;
	id: string;
	transcribeCnt: number;
};
export type DBPromise = {
    id?:number
    created_at?:Date;
    text:string;
    transcribe_cnt:number
};
