import * as boardDB from '../db/boardDB';
import { Board } from './board';
import { BoardImage } from './boardImage';

jest.mock('../db/boardDB');
const db = boardDB as jest.Mocked<typeof boardDB>;

//   addImage
test('add image ', async () => {
    // given
    db.selectAllImage.mockResolvedValue([]);
    const board = new Board();
    const newImage = new BoardImage('src1', 'tag1', 'id1');
    // when
    await (await board.initBoardFromDB()).addImage(newImage);
    // then
    expect(board.picList).toContainEqual(
       {
            img_src: 'src1',
            tag: 'tag1',
            id: 'id1',
    },
    );
  });
//   deleteImage
//   deletecategory
//   editcategry
//   getBoardData
