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
    <div className={`h-[${height}] w-[${width}] overflow-y-hidden`}>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'fill',
          imageRendering: 'crisp-edges',
        }}
        // loading="lazy"
        decoding="async"
        // fill
      />
    </div>
  );
}
