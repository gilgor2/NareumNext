import Image from 'next/image';
import React from 'react';

type Prop = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
};
export default function ImageBox({ src, alt = 'img', width = '100%', height = '100%' }: Prop) {
  return (
    <div className={`h-[100%] w-[${width}] relative overflow-y-hidden`}>
      <Image
        src={src}
        alt={alt}
        width="100"
        height="100"
        style={{
          width: '100%',
          height,
          objectFit: 'cover',
        }}
        loading="lazy"
      />
    </div>
  );
}
