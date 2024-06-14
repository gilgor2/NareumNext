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
    <div className={`h-[${height}] w-[${width}] relative overflow-y-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'contain',
        }}
        // loading="lazy"
        decoding="async"
      />
    </div>
  );
}
