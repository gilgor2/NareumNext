'use client';

import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import PromiseEditor from '../PromiseEditor/PromiseEditor';

type PromiseAddFunction = (text:string)=>void;
export default function PromiseUploader({ addPromise }:{ addPromise:PromiseAddFunction }) {
  const [newPromiseText, setnewPromiseText] = useState('');
  const [isEditorFocused, setisEditorFocused] = useState(true);

  const focusNewPromiseEditor = () => {
	flushSync(() => {
		setisEditorFocused(false);
	});
	setisEditorFocused(true);
};

const onUpload = async () => {
	setnewPromiseText('');
	focusNewPromiseEditor();
	addPromise(newPromiseText);
};
    return (
      <PromiseEditor
        state={newPromiseText}
        setstate={setnewPromiseText}
        placeholder="새로운 다짐을 입력해주세요."
        onEnter={onUpload}
        isFocused={isEditorFocused}
      />
    );
}
