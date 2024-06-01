import { RefObject, useEffect, useRef } from 'react';

type DebouncerProps = {
	state: string | null;
	setstate: React.Dispatch<React.SetStateAction<string>>;
	debounceTime: number;
};
const useTypedebounce = <T extends HTMLInputElement | HTMLTextAreaElement>({
	state,
	setstate,
	debounceTime,
}: DebouncerProps):{
    ref:RefObject<T>
    handleDebounceText:React.ChangeEventHandler<T>
} => {
	const ref = useRef<T>(null);

	let timer: NodeJS.Timeout;
	const handleDebounceText: React.ChangeEventHandler<T> = (e: React.ChangeEvent<T>) => {
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			setstate(e.target.value);
		}, debounceTime);
	};

	useEffect(() => {
		if (ref.current) {
			if (state) {
				ref.current.value = state;
			}
			if (state === '') {
				ref.current.value = '';
			}
		}
	}, [state, ref]);

	if (debounceTime === 0) {
		const handleText: React.ChangeEventHandler<T> = (e: React.ChangeEvent<T>) => {
			setstate(e.target.value);
		};

		return { ref, handleDebounceText: handleText };
	}

	return { ref, handleDebounceText };
};
export default useTypedebounce;
