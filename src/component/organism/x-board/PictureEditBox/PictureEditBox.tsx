'use client';

import ImageBox from '@/component/atom/common/ImageBox/ImageBox';
import React from 'react';
import Input from '@/component/atom/common/Input/Input';
import DeleteBox from '@/component/molecule/common/DeleteBox/DeleteBox';

type Props = {
    category:string;
    srcArray?:string[];
    onDeleteImage:(id:string)=>void;
    onDeleteCategory:(category:string)=>void;
    editCategory:(text:string)=>void

};
export default function PictureEditBox({
 category, srcArray = [], onDeleteImage, onDeleteCategory, editCategory,
}:Props) {
  return (
    <div className="border-2 border-black-100 rounded-m w-[55%] h-[72%] min-h-[30rem] p-10 flex flex-col justify-between">
      <div className="flex justify-between py-1rem items-center">
        <h1 className="text-3xl border-b-2 border-b-tg pb-8">
          <Input state={category} setstate={editCategory} placeholder="주제를 입력해주세요" debounceTime={400} />
        </h1>
      </div>

      <div className="h-[3rem]" />

      <div className="grid grid-cols-3 grid-rows-2 gap-10 h-[90%] bg-bgg p-5 rounded-sm">
        {srcArray.map((src, i) => (
          <DeleteBox key={i} onClickDelete={() => { onDeleteImage(src); }} className="w-[100%] h-[100%] ">
            <ImageBox src={src} alt={src} />
          </DeleteBox>
      ))}
      </div>
      <div className="h-[3rem]" />
      <button onClick={() => { onDeleteCategory(category); }} type="button" className="material-icons bg-redd h-[4rem] rounded-xl w-[100%] bg-opacity-70">
        <span className="text-[2rem] text-white">
          "
          {category}
          " 삭제하기
        </span>

      </button>

    </div>
  );
}
