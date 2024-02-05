'use client';

// import ActionButton from '@/component/atom/common/ActionButton/ActionButton';
import React, { ReactNode, useEffect, useState } from 'react';
import ActionButton from '../../component/atom/common/ActionButton/ActionButton';

type Props = {
    EditSection:ReactNode;
    TranscribeSection:ReactNode;
    ExhibitSection:ReactNode
    isPromiseListEmpty:boolean;
    isTimePassed:boolean;

};
export default function AffirmationPageView({
 EditSection, TranscribeSection, ExhibitSection, isPromiseListEmpty, isTimePassed,
}:Props) {
const [isEdit, setisEdit] = useState(false);
const [isTranscribeComplete, setisTranscribeComplete] = useState<boolean>(!isTimePassed);

	// // promiseList가 비었으면 editSection 보여주기
useEffect(() => {
		if (isPromiseListEmpty && !isEdit) {
			setisEdit(true);
		}
}, []);

const isEditSection = isEdit;
const isExhibitSection = !isEdit && isTranscribeComplete;
const isTranscribeSection = !isEdit && !isTranscribeComplete;

const handleViewLogicOnEditButton = () => {
		setisEdit((bool) => !bool);
		setisTranscribeComplete(false);
	};

  return (
    <div className="relative flex  h-[100vh] items-center justify-center">
      <div className="pl-[100px]">
        {isEditSection && EditSection }

        {isExhibitSection && ExhibitSection }

        {isTranscribeSection && TranscribeSection }

      </div>

      {!isPromiseListEmpty && (
      <>
        <div className="w-[100px]" />
        <ActionButton onClick={handleViewLogicOnEditButton} className="w-[40px] top-[50% - 20px] absolute right-10">
          {isEditSection ? '수정 완료' : '새로 다짐하기'}
        </ActionButton>
      </>

			)}
    </div>
  );
}
