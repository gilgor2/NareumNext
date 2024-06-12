'use client';

import ImageBox from '@/component/atom/common/ImageBox/ImageBox';
import React from 'react';
import Input from '@/component/atom/common/Input/Input';
import DeleteBox from '@/component/molecule/common/DeleteBox/DeleteBox';

type Props = {
  category: string;
  srcArray?: string[];
  onDeleteImage: (id: string) => void;
  onDeleteCategory: (category: string) => void;
  editCategory: (text: string) => void;
};
export default function PictureEditBox({
  category,
  srcArray = [],
  onDeleteImage,
  onDeleteCategory,
  editCategory,
}: Props) {
  return (
    <div className="border-black-100 flex h-[72%] min-h-[30rem] w-[55%] flex-col justify-between rounded-m border-2 p-10">
      <div className="py-1rem flex items-center justify-between">
        <h1 className="border-b-2 border-b-tg pb-8 text-3xl">
          <Input
            state={category}
            setstate={editCategory}
            placeholder="주제를 입력해주세요"
            debounceTime={400}
          />
        </h1>
      </div>

      <div className="h-[3rem]" />

      <div className="grid h-[90%] grid-cols-3 grid-rows-2 gap-10 rounded-sm bg-bgg p-5">
        {srcArray.map((src, i) => (
          <DeleteBox
            key={i}
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
        onClick={() => {
          onDeleteCategory(category);
        }}
        type="button"
        className="material-icons h-[4rem] w-[100%] rounded-xl bg-redd bg-opacity-70"
      >
        <span className="text-[2rem] text-white">"{category}" 삭제하기</span>
      </button>
    </div>
  );
}
