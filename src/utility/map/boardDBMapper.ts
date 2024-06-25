import { BoardImage, DBBoardImage } from '@/type/board';

export function DBBoardImageFromBoardImage(pic:BoardImage) {
    const dbBoard:DBBoardImage = {
        ...pic,
        user_id: 'me',

    };
    return dbBoard;
}

export function boardImageFromDBBoardImage(pic:DBBoardImage) {
    const board:BoardImage = {
        img_src: pic.img_src,
        tag: pic.tag,
        id: pic.id,

    };
    return board;
}
