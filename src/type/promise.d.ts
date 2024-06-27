export type PromiseType = {
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

export type PromiseListType = {
    promiseList:PromiseType[],
    initPromiseListFromDB:()=>void,
    addPromise(promise:PromiseType),
    deletePromise(id:string),
    addAllPromiseCnt(),
    getPromiseList():Promise<Promise[]>
};

export type PromiseListPostRequestType = {
    data:{
        promise:string
    }
};
export type PromiseListGetReponseType = {
    data:PromiseType[]
};

export type PromiseListDeleteRequestType = {
    id:string
};
