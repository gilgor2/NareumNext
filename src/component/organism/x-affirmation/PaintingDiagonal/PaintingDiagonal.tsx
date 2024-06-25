import React from 'react';
import { generateUniqueId } from '../../../../utility/utility';
import { PromiseType } from '../../../../type/promise';
import RowContainerAutoScroll from '../../../molecule/common/RowContainerAutoScroll/RowContainerAutoScroll';
import MouseDodgingSpan from '../../../atom/common/MouseDodgingSpan/MouseDodgingSpan';

export default function PaintingDiagonal({ promiseList }: { promiseList: PromiseType[] }) {
  const repeatedPromiseList = Array(20).fill(promiseList).flat();
  return (
    <div className="relative h-[95vh] w-[95vw] overflow-hidden rounded-sm ">
      <div className="absolute left-[-150%] top-[-150%] flex h-[400vh] w-[400vw] rotate-[-20deg] flex-col items-center justify-center ">
        {repeatedPromiseList.map((promiseObj, i) => (
          <RowContainerAutoScroll key={generateUniqueId()} isFastOnHover>
            {promiseObj.text
              .repeat(100)
              .split('')
              .map((char: string, j: number) => (
                <MouseDodgingSpan text={char} key={j} className="text-10 pb-3 font-semibold" />
              ))}
          </RowContainerAutoScroll>
        ))}
      </div>
    </div>
  );
}
