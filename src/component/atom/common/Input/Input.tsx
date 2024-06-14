'use client';

import React from 'react';
import useTypedebounce from '../../../../utility/hook/useTypeDebounce';

type InputProps = {
  state: string;
  setstate?: React.Dispatch<React.SetStateAction<string>> | ((str: string) => void);
  placeholder: string;
  debounceTime?: number;
  readOnly?: boolean;
};
export default function Input({
  state,
  setstate,
  placeholder,
  debounceTime = 0,
  readOnly = false,
}: InputProps) {
  const { ref, handleDebounceText } = useTypedebounce<HTMLInputElement>({
    state,
    setstate: setstate as React.Dispatch<React.SetStateAction<string>>,
    debounceTime,
  });

  if (!setstate) {
    return (
      <input
        disabled={readOnly}
        placeholder={placeholder}
        name={placeholder}
        value={state}
        className="bg-transparent focus:outline-none"
      />
    );
  }

  return (
    <input
      disabled={readOnly}
      ref={ref}
      placeholder={placeholder}
      name={placeholder}
      onChange={(e) => {
        handleDebounceText(e);
      }}
      className="bg-transparent focus:outline-none"
    />
  );
}
