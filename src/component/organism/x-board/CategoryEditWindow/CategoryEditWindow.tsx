'use client';

import ImageBox from '@/component/atom/common/ImageBox/ImageBox';
import React from 'react';
import DeleteBox from '@/component/molecule/common/DeleteBox/DeleteBox';
import CategoryNameInput from '@/component/molecule/x-board/CategoryNameInput/CategoryNameInput';

type Props = {
  category: string;
  srcArray?: string[];
  onDeleteImage: (id: string) => void;
  onDeleteCategory: (category: string) => void;
  editCategory: (text: string) => void;
};
export default function CategoryEditWindow({
  category,
  srcArray = [],
  onDeleteImage,
  onDeleteCategory,
  editCategory,
}: Props) {
  return (
    <div className="flex h-[100%] items-center px-[10%]">
      <div className="border-black-100 flex h-[72%] min-h-[30rem] w-[55%] flex-col justify-between rounded-m border-2 p-10">
        <CategoryNameInput category={category} setcategory={editCategory} />
        <div className="h-[3rem]" />

        <div className="grid h-[90%] grid-cols-3 grid-rows-2 gap-10 rounded-sm bg-bgg p-5">
          {srcArray.map((src, i) => (
            <DeleteBox
              key={src}
              onClickDelete={() => {
                onDeleteImage(src);
              }}
              className="h-[100%] w-[100%] "
            >
              <ImageBox src={src} alt={src} />
            </DeleteBox>
          ))}
        </div>

        <div className="h-[3rem]" />

        <button
          type="button"
          className="material-icons h-[4rem] w-[100%] rounded-xl bg-redd bg-opacity-70"
          onClick={() => {
            onDeleteCategory(category);
          }}
        >
          <span className="text-[2rem] text-white">"{category}" 삭제하기</span>
        </button>
      </div>
    </div>
  );
}
