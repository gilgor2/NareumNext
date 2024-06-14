import { getBoardData } from '@/action/boardAction';
import ActionButton from '@/component/atom/common/ActionButton/ActionButton';
import PictureGroup from '@/component/organism/x-board/PictureGroup/PictureGroup';
import { FLEX_DIRECTION_OPTION, GROUP_SIZE_PER_CATEGORY_LENGTH } from '@/utility/constants';
import { getRandomFromArr } from '@/utility/utility';
import Link from 'next/link';
import { redirect } from 'next/navigation';

type GroupCnt = 0 | 1 | 2 | 3 | 4;

const getGroupArrange = (groupCnt: GroupCnt) => {
  const widthCombos = GROUP_SIZE_PER_CATEGORY_LENGTH[`${groupCnt}`] || [];
  const widthArr = getRandomFromArr(widthCombos);
  return {
    widthArr: widthArr.map((val: number) => `w-[${val}%]`),
    flexDirection: getRandomFromArr(FLEX_DIRECTION_OPTION),
    height:
      Math.ceil(widthArr.reduce((sum: number, cur: number) => sum + cur) / 100) === 1
        ? 'h-[100%]'
        : 'h-[50%]',
  };
};
export default async function ExhibitSection() {
  const boardData = await getBoardData();
  const { widthArr, flexDirection, height } = getGroupArrange(boardData.length as GroupCnt);
  // redirect
  if (!Object.keys(boardData)[0]) {
    redirect('/board/edit');
  }
  const containerStyle = `flex h-[100%] w-[100%] ${flexDirection} flex-wrap pr-[10rem]`;
  return (
    <div className={containerStyle}>
      {boardData.map((categoryObj, i) => {
        const groupStyle = `${widthArr[i]} ${height}`;
        return (
          <div key={i} className={groupStyle}>
            <PictureGroup imageSrcArr={categoryObj.srcArr} />
          </div>
        );
      })}

      <Link href="/board/edit">
        <ActionButton className="absolute right-10 top-[calc(50%-40px)] w-[5rem]">
          수정
        </ActionButton>
      </Link>
    </div>
  );
}
