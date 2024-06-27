'use client';

import React from 'react';
import { useComponentSize } from '@/utility/hook/useComponentSize';
import { useImageGroupOrganizer } from './hook';
import PictureGroupColumn from '../../../molecule/x-board/PictureGroupColumn/PictureGroupColumn';

type Props = {
  imageSrcArr: string[];
};
export default function BoardByCategory({ imageSrcArr }: Props) {
  const { ref, height, width } = useComponentSize<HTMLDivElement>();
  const ratio = height / width;
  const { columnArr } = useImageGroupOrganizer(imageSrcArr, ratio);
  const shuffledColumnArr = columnArr.sort(() => (Math.random() > 0.49 ? 1 : -1));
  return (
    <div className="flex h-[100%] w-[100%]" ref={ref}>
      {shuffledColumnArr.map((colArr, i) => (
        <PictureGroupColumn key={i} srcArr={colArr} />
      ))}
    </div>
  );
}
