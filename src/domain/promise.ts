import { PromiseType } from '@/type/promise';

class Promise implements PromiseType {
    text:string;

    transcribeCnt: number;

    date?: Date | undefined;

    id: string;

    constructor(text:string, date = new Date(), transcribeCnt = 0, id = 'tmp') {
        this.text = text;
        this.transcribeCnt = transcribeCnt;
        this.date = date;
        this.id = id;
    }
}

export default Promise;
