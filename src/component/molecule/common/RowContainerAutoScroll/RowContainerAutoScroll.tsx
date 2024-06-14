import React, { ReactElement } from 'react';

export default function RowContainerAutoScroll({
  isFastOnHover = true,
  children,
}: {
  isFastOnHover?: boolean;
  children: ReactElement;
}) {
  return (
    <div className="overflowx-hidden group h-max w-[100%] ">
      <div
        className={`animate-moveToRightPaused ${
          isFastOnHover && 'group-hover:[animation-play-state:running]'
        }`}
      >
        <div className="flex animate-moveToRightInfinite">{children}</div>
      </div>
    </div>
  );
}
