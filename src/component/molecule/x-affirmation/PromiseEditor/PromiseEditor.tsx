import React, { SetStateAction, useState } from 'react';

import EnterButton from '../../../atom/common/EnterButton/EnterButton';
import UnderlineContainer from '../../common/UnderlineContainer/UnderlineContainer';
import TextArea from '../../../atom/common/TextArea/TextArea';

type Props = {
  state: string;
  setstate: React.Dispatch<SetStateAction<string>>;
  placeholder?: string;
  onEnter?: () => void;
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
  isCompleted?: boolean;
  isFocused?: boolean;
};
export default function PromiseEditor({
  state,
  setstate = () => {},
  placeholder = '',
  onEnter = () => {},
  onDelete = () => {},
  isCompleted = false,
  isFocused = false,
}: Props) {
  return (
    <div className="relative flex h-max items-center justify-start gap-4">
      <UnderlineContainer disable={isCompleted}>
        <TextArea
          state={state}
          setstate={setstate}
          className="w-[500px] text-4"
          placeholder={placeholder}
          disable={isCompleted}
          isFocused={isFocused}
        />
      </UnderlineContainer>
      <div className="w-[80px]" />
      {!isCompleted && !!state && (
        <EnterButton onEnter={onEnter} active className="absolute right-0 text-2" />
      )}
    </div>
  );
}
