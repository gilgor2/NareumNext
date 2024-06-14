import { FLEX_JUSTIFY_OPTIONS } from '@/utility/constants';
import { getRandomFromArr } from '@/utility/utility';
import Image from 'next/image';
import React from 'react';

type Props = {
  srcArr: string[];
};

export default function PictureGroupColumn({ srcArr }: Props) {
  const columnStyle = `flex w-[100%] h-[100%] flex-col ${getRandomFromArr(FLEX_JUSTIFY_OPTIONS)} overflow-hidden`;
  return (
    <div className={columnStyle}>
      {srcArr.map((src, i) => {
        const imageContainerStyle = `h-max w-[100%] rotate-${5 - Math.floor(Math.random() * 10)} scale-${105 - Math.floor(Math.random() * 10)}`;
        return (
          <div key={i} className={imageContainerStyle}>
            <Image
              src={src}
              alt={src}
              width="100"
              height="100"
              loading="lazy"
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
