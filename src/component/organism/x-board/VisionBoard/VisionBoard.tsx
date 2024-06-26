import { CategoryObj } from '@/type/board';
import { FLEX_DIRECTION_OPTION, GROUP_SIZE_PER_CATEGORY_LENGTH } from '@/utility/constants';
import { getRandomFromArr } from '@/utility/utility';
import React from 'react';
import BoardByCategory from '../BoardByCategory/BoardByCategory';

type Props = {
  boardData: CategoryObj[];
};
type GroupCnt = 0 | 1 | 2 | 3 | 4;

const getArrangeMethods = (groupCnt: GroupCnt) => {
  const widthCombos = GROUP_SIZE_PER_CATEGORY_LENGTH[`${groupCnt}`] || [];
  const widthArr = getRandomFromArr(widthCombos);
  const rowCnt = Math.ceil(widthArr.reduce((sum: number, cur: number) => sum + cur) / 100);

  return {
    widthArr: widthArr.map((val: number) => `w-[${val}%]`),
    flexDirection: getRandomFromArr(FLEX_DIRECTION_OPTION),
    heightPerGroup: rowCnt === 1 ? 'h-[100%]' : 'h-[50%]',
  };
};

export default function VisionBoard({ boardData }: Props) {
  const { widthArr, heightPerGroup, flexDirection } = getArrangeMethods(
    boardData.length as GroupCnt,
  );

  return (
    <div className={`flex h-[100%] w-[100%] ${flexDirection} flex-wrap pr-[10rem] `}>
      {boardData.map((categoryObj, i) => (
        <div key={categoryObj.name} className={`${widthArr[i]} ${heightPerGroup}`}>
          <BoardByCategory imageSrcArr={categoryObj.srcArr} />
        </div>
      ))}
    </div>
  );
}
