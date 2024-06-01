'use client';

import ImageBox from '@/component/atom/common/ImageBox/ImageBox';
import Input from '@/component/atom/common/Input/Input';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Props = {
    onClickPicture:(picture:string)=>void
};
type ImageFromNaver = {
  link:string
};
export default function PictureSearchSection({ onClickPicture }:Props) {
    const [searchText, setsearchText] = useState<string>('');
    const [imageSrcArr, setimageSrcArr] = useState<string[]>([]);

    useEffect(() => {
      if (searchText) {
        const fetchDataFromNaver = async () => {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board/naver-image?searchText=${searchText}`);
          const data = response.data || [];
          return data;
        };
        const setImage = async () => {
          const data:ImageFromNaver[] = await fetchDataFromNaver();
          const srcArr = data.map((naverImg) => naverImg.link);

          setimageSrcArr(srcArr);
        };

        setImage();
      }
    }, [searchText]);

  return (
    <div className="h-[60%]">
      <div className="h-[3rem] py-[2rem] text-4xl">
        <Input state={searchText} setstate={setsearchText} placeholder="이미지 검색" debounceTime={500} />
      </div>
      <div className="h-[3rem]" />
      <div className="flex h-[calc(100%-10rem)] flex-wrap gap-10 overflow-y-scroll">
        {!imageSrcArr[0] && '목표와 관련된 이미지를 선택해주세요.'}
        {imageSrcArr.map((src, i) => (
          <button type="button" className="w-[30%]" onClick={() => { onClickPicture(src); }}>
            <ImageBox src={src} key={i} />
          </button>
      ))}
      </div>
    </div>
  );
}
