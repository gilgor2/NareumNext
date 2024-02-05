'use client';

import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import { createPromise } from '@/action/affirmationAction';
import PromiseEditor from '../PromiseEditor/PromiseEditor';

export default function PromiseUploader() {
  const [newPromiseText, setnewPromiseText] = useState('');
  const [isEditorFocused, setisEditorFocused] = useState(true);

  const focusNewPromiseEditor = () => {
	flushSync(() => {
		setisEditorFocused(false);
	});
	setisEditorFocused(true);
};

const onUpload = () => {
	// promiseListStore.addPromise(newPromiseText);
	setnewPromiseText('');
	focusNewPromiseEditor();
	createPromise(newPromiseText);
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
