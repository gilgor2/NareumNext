import {
 deleteAllTag, deleteImage, editAllTag, addImage, selectAllImage,
} from '@/db/boardDB';
import { CategoryObj } from '@/type/board';
import { BoardImage } from '@/domain/boardImage';

export class Board {
    picList:BoardImage[] = [];

    async initBoardFromDB() {
        this.picList = await selectAllImage();

        return this;
    }

    async addImage(board:BoardImage) {
        await addImage(board);

        this.picList.push(board);

        return this;
    }

    async deleteImage(src:string) {
        await this.initBoardFromDB();

        const isPromiseInList = this.picList.findIndex((pic) => pic.img_src === src) > -1;
        if (isPromiseInList) {
            await deleteImage(src);

            this.picList = this.picList.filter((pic) => pic.img_src !== src);
        } else {
         console.log("no pic in list. can't delete");
        }

        return this;
    }

    async deleteCategory(category:string) {
        await deleteAllTag(category);

        return this;
    }

    async editCategory(original:string, newCategory:string) {
        if (newCategory) {
            await editAllTag(original, newCategory);
        }

        return this;
    }

     async getBoardData() {
        await this.initBoardFromDB();

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
}
