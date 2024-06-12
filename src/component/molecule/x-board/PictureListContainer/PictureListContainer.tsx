import React from 'react';
import { MAX_IMAGE_PER_CATEGORY } from '@/utility/constants';
import PlusButton from '@/component/atom/common/PlusButton/PlusButton';
import ImageBox from '../../../atom/common/ImageBox/ImageBox';

type Props = {
  title: string;
  srcArray: string[];
  onClickPlusButton: () => void;
};

export default function PictureListContainer({ title, srcArray, onClickPlusButton }: Props) {
  return (
    <div className="border-black-100 flex h-[45%] w-[40%] flex-col justify-between rounded-m border-2 p-10">
      <div className="py-1rem flex items-center justify-between">
        <h1 className="text-3xl text-tg">{title}</h1>
        <button onClick={onClickPlusButton} type="button" className="material-icons text-tg">
          edit
        </button>
      </div>
      <div className="flex h-[90%] flex-wrap content-between justify-between rounded-sm bg-bgg p-5">
        {srcArray.map((src, i) => (
          <ImageBox key={i} src={src} alt={src} width="30%" height="45%" />
        ))}
        {srcArray.length < MAX_IMAGE_PER_CATEGORY && (
          <PlusButton onClick={onClickPlusButton} className="h-[45%] w-[30%] text-[15rem]" />
        )}
      </div>
    </div>
  );
}
