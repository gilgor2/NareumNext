'use client';

import Link from 'next/link';
import ActionButton from '@/component/atom/common/ActionButton/ActionButton';
import { useContext } from 'react';
import { NoticeContext } from '@/component/organism/common/NotificationBlockDispenser/hook';
import { MAX_BOARD_CATEGORY_COUNT } from '@/utility/constants';
import PictureListContainer from '@/component/molecule/x-board/PictureListContainer/PictureListContainer';
import PictureAddModal from '@/component/organism/x-board/PictureAddModal/PictureAddModal';
import PlusButton from '@/component/atom/common/PlusButton/PlusButton';
import PictureEditBox from '@/component/organism/x-board/PictureEditBox/PictureEditBox';
import { useBoardEditPageState } from './hooks';

export default function EditPage() {
  const noticeStore = useContext(NoticeContext);
  const {
    boardData,
    targetCategory,
    isPopup,
    openPopup,
    closePopup,

    addImageTo,
    dropImageTo,
    deleteImageFrom,
    deleteCategory,
    editCategory,
    addNewCategory,
  } = useBoardEditPageState();
  return (
    <div className="pr-[10rem]">
      {!isPopup && (
        <div className="flex h-[100%] flex-wrap justify-between px-[10%] py-[5%]">
          {boardData.map(({ name, srcArr }, i) => (
            <PictureListContainer
              key={i}
              title={name}
              srcArray={srcArr}
              onClickPlusButton={() => {
                openPopup(name);
              }}
            />
          ))}
          {Object.keys(boardData).length < MAX_BOARD_CATEGORY_COUNT && (
            <PlusButton
              onClick={addNewCategory}
              className="h-[45%] w-[40%] !text-[24rem] !leading-[24rem]"
            />
          )}
        </div>
      )}

      {isPopup && (
        <div className="border-10 border-red flex h-[100%] items-center px-[10%]">
          <PictureEditBox
            category={targetCategory}
            srcArray={boardData[boardData.findIndex((obj) => obj.name === targetCategory)]?.srcArr}
            onDeleteImage={deleteImageFrom}
            onDeleteCategory={deleteCategory}
            editCategory={editCategory}
          />
        </div>
      )}
      <PictureAddModal
        isOpen={isPopup}
        closeSelf={closePopup}
        onClickPicture={addImageTo}
        onDropImage={dropImageTo}
      />
      <Link href="/board/exhibit">
        <ActionButton className="absolute right-10 top-[calc(50%-40px)] w-[5rem]">
          완료
        </ActionButton>
      </Link>
    </div>
  );
}
