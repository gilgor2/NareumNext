import { useEffect, useState } from 'react';

type ImageRatioObj = {
  ratio: number;
  src: string;
  i?: number;
};
const RATIO_WEIGHT = 0.1;

const organizeColumnByRatio = (ratioArr: ImageRatioObj[], containerRatio: number) => {
  const columnArr: string[][] = [[]];
  const heightArr = [0];
  ratioArr
    .sort((a, b) => b.ratio - a.ratio)
    .forEach(({ ratio, src }) => {
      const minHeight = Math.min(...heightArr);
      const maxHeight = Math.max(...heightArr);
      const ratioAfterAdded = Math.max(minHeight + ratio, maxHeight) / columnArr.length;
      if (ratioAfterAdded > containerRatio + RATIO_WEIGHT && columnArr[0][0]) {
        columnArr.push([src]);
        heightArr.push(ratio);
        return;
      }
      const leastColI = heightArr.indexOf(minHeight);
      columnArr[leastColI]?.push(src);
      heightArr[leastColI] += ratio;
    });
  return columnArr;
};

export const useImageGroupOrganizer = (srcArr: string[], containerRatio: number) => {
  const [imageRatioArr, setimageRatioArr] = useState<ImageRatioObj[]>([]);
  const [columnArr, setcolumnArr] = useState<string[][]>([]);
  const initImageRatioArr = () => {
    // imageRatioArr을 얻는 과정
    srcArr.forEach((src, i) => {
      const preloadImage = new Image();
      const setRatio = () => {
        setimageRatioArr((state) => {
          const tmpState = [...state];
          const isOnly = tmpState.findIndex((imageRatioObj) => imageRatioObj.i === i) < 0;
          if (isOnly) {
            tmpState.push({
              i,
              src,
              ratio:
                preloadImage.naturalWidth === 0
                  ? 1
                  : preloadImage.naturalHeight / preloadImage.naturalWidth,
            });
            return tmpState;
          }
          return state;
        });
      };

      preloadImage.onload = () => {
        setRatio();
      };
      preloadImage.src = `${process.env.NEXT_PUBLIC_ROUTER_URL}/_next/image?url=${src}&w=1080&q=75`; // src를 등록하는 것으로 브라우저에서 load 실행
      // next/image에서 사용하는 url을 부여하면, 이미지 로드시 authorization문제 해결 가능.
    });
  };

  useEffect(() => {
    initImageRatioArr();
  }, [srcArr]);
  useEffect(() => {
    // if (imageRatioArr.length === srcArr.length) { // 로드 실패시 수가 일치하지 않을 수 있음.
    const organizedColumn = organizeColumnByRatio(imageRatioArr, containerRatio);
    setcolumnArr(organizedColumn);
    // }
  }, [imageRatioArr]);

  return { columnArr };
};
