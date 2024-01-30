'use cient';

import React, { useEffect } from 'react';
import useTypedebounce from '../../../utility/hook/useTypeDebounce';

type TextAreaProps = {
	state: string;
	setstate?: React.Dispatch<React.SetStateAction<string>>;
	placeholder?: string;
	debounceTime?: number;
	readOnly?: boolean;
	className?: string;
	disable?: boolean;
	isFocused?: boolean;
	tabIndex?: number;
};
export default function TextArea({
	state,
	setstate,
	placeholder = '',
	debounceTime = 0,
	readOnly = false,
	className = '',
	disable = false,
	isFocused = false,
	tabIndex = 0,
}: TextAreaProps) {
	const { ref, handleDebounceText } = useTypedebounce<HTMLTextAreaElement>({
		state,
		setstate: setstate as React.Dispatch<React.SetStateAction<string>>,
		debounceTime,
	});

	const handleResize = () => {
		if (ref.current) {
			ref.current.style.height = 'auto';
			ref.current.style.height = `${ref.current?.scrollHeight}px`;
		}
	};

	useEffect(() => {
		if (ref.current) {
			ref.current.style.height = `${ref.current?.scrollHeight}px`;
			if (isFocused) {
				ref.current.focus();
			}
		}
	}, [ref, isFocused]);

	if (!setstate) {
		return (
  <textarea
    tabIndex={tabIndex}
    ref={ref}
    disabled={readOnly}
    placeholder={placeholder}
    name={placeholder}
    rows={1}
    readOnly={disable}
    className={`resize-none bg-transparent focus:outline-none ${className}`}
  />
);
	}

	return (
  <textarea
    tabIndex={tabIndex}
    ref={ref}
    disabled={readOnly}
    placeholder={placeholder}
    name={placeholder}
    rows={1}
    readOnly={disable}
    className={`resize-none bg-transparent focus:outline-none ${className}`}
    onChange={(e) => {
				handleResize();
				handleDebounceText(e);
			}}
		/>
	);
}
