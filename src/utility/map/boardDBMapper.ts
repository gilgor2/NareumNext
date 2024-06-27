import { BoardImageType, DBBoardImage } from '@/type/board';

export function DBBoardImageFromBoardImage(pic:BoardImageType) {
    const dbBoard:DBBoardImage = {
        img_src: pic.img_src,
        tag: pic.tag,
    };
    return dbBoard;
}

export function boardImageFromDBBoardImage(pic:DBBoardImage) {
    const board:BoardImageType = {
        ...pic,

    };
    return board;
}
