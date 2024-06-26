'use client';

import Link from 'next/link';
import ActionButton from '@/component/atom/common/ActionButton/ActionButton';
import { MAX_BOARD_CATEGORY_COUNT } from '@/utility/constants';
import PictureAddModal from '@/component/organism/x-board/PictureAddModal/PictureAddModal';
import PlusButton from '@/component/atom/common/PlusButton/PlusButton';
import CategorizedPictureList from '@/component/molecule/x-board/CategorizedPictureList/CategorizedPictureList';
import CategoryEditWindow from '@/component/organism/x-board/CategoryEditWindow/CategoryEditWindow';
import { useBoardEditPageState } from './hooks';

export default function EditPage() {
  const {
    boardData,
    targetCategory,

    isModalOpen,
    openModal,
    closeModal,

    addImageTo,
    dropImageTo,
    deleteImageFrom,
    deleteCategory,
    editCategory,
    addNewCategory,
  } = useBoardEditPageState();

  const isNewCategoryAddable = Object.keys(boardData).length < MAX_BOARD_CATEGORY_COUNT;
  return (
    <div className="relative pr-[10rem]">
      {!isModalOpen && (
        <div className="flex h-[100%] flex-wrap justify-between px-[10%] py-[5%]">
          {boardData.map((categoryObj, i) => (
            <CategorizedPictureList
              key={categoryObj.name}
              title={categoryObj.name}
              srcArray={categoryObj.srcArr}
              onClickPlusButton={() => {
                openModal(categoryObj.name);
              }}
            />
          ))}

          {isNewCategoryAddable && (
            <PlusButton
              className="h-[45%] w-[40%] !text-[24rem] !leading-[24rem]"
              onClick={addNewCategory}
            />
          )}
        </div>
      )}

      {isModalOpen && (
        <CategoryEditWindow
          category={targetCategory}
          srcArray={
            boardData[boardData.findIndex((obj) => obj.name === targetCategory)]?.srcArr || []
          }
          onDeleteImage={deleteImageFrom}
          onDeleteCategory={deleteCategory}
          editCategory={editCategory}
        />
      )}

      <PictureAddModal
        isOpen={isModalOpen}
        closeSelf={closeModal}
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
