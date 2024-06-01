import React from 'react';
import { MAX_IMAGE_PER_CATEGORY } from '@/utility/constants';
import PlusButton from '@/component/atom/common/PlusButton/PlusButton';
import ImageBox from '../../../atom/common/ImageBox/ImageBox';

type Props = {
    title:string;
    srcArray:string[];
    onClickPlusButton:()=>void;

};

export default function PictureListContainer({
 title, srcArray, onClickPlusButton,
}:Props) {
  return (
    <div className="border-2 border-black-100 rounded-m w-[40%] h-[45%] p-10 flex flex-col justify-between">
      <div className="flex justify-between py-1rem items-center">
        <h1 className="text-3xl text-tg">{title}</h1>
        <button onClick={onClickPlusButton} type="button" className="material-icons text-tg">edit</button>
      </div>
      <div className="flex flex-wrap justify-between content-between h-[90%] bg-bgg p-5 rounded-sm">
        {srcArray.map((src, i) => <ImageBox key={i} src={src} alt={src} width="30%" height="45%" />)}
        {srcArray.length < MAX_IMAGE_PER_CATEGORY && <PlusButton onClick={onClickPlusButton} className="w-[30%] h-[45%] text-[15rem]" />}
      </div>
    </div>
  );
}
