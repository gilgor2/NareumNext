import { BoardImageType } from '@/type/board';

export class BoardImage implements BoardImageType {
    img_src:string;

    tag:string;

    id:string;

    constructor(img_src:string, tag:string, id = 'tmp') {
        this.img_src = img_src;
        this.tag = tag;
        this.id = id;
    }
}
