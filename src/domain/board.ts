import {
 deleteAllTag, deleteImage, editAllTag, insertImage, selectAllImage,
} from '@/db/boardDB';
import { BoardImageType, CategoryObj, DBBoardImage } from '@/type/board';
import { BoardImage } from '@/domain/boardImage';

export class Board {
    picList:BoardImage[] = [];

    async updateBoardFromDB() {
        const { data } = await selectAllImage();
        if (data) {
            this.picList = data;
        }
        return this;
    }

    async addImage(board:BoardImageType) {
        const dbBoard = Board.boardToDBBoard(board);
        await insertImage(dbBoard);
        return this;
    }

    async deleteImage(src:string) {
        await deleteImage(src);
        return this;
    }

    async deleteCategory(category:string) {
        await deleteAllTag(category);
        return this;
    }

    async editCategory(original:string, newCategory:string) {
        await editAllTag(original, newCategory);
        return this;
    }

     async getBoardData() {
        await this.updateBoardFromDB();
        const boardData:CategoryObj[] = [];
        const tagIndexObj:{ [key:string]:number } = {};
        this.picList.forEach((picture) => {
            if (tagIndexObj[picture.tag] || tagIndexObj[picture.tag] === 0) {
                boardData[tagIndexObj[picture.tag]].srcArr.push(picture.img_src);
            } else {
                boardData.push({
                    name: picture.tag,
                    srcArr: [picture.img_src],
                });
                tagIndexObj[picture.tag] = boardData.length - 1;
            }
        });
        return boardData;
     }

    static boardToDBBoard(pic:BoardImageType) {
        const dbBoard:DBBoardImage = {
            ...pic,
            user_id: 'me',

        };
        return dbBoard;
    }

    static DBBoardToBoard(pic:DBBoardImage) {
        const board:BoardImage = {
            img_src: pic.img_src,
            tag: pic.tag,
            id: pic.id,

        };
        return board;
    }
}
