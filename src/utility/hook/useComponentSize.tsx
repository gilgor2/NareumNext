import { LegacyRef, useEffect, useRef, useState } from 'react';

export function useComponentSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setwidth] = useState(1);
  const [height, setheight] = useState(1);

  useEffect(() => {
    if (ref.current) {
      setheight(ref.current.clientHeight);
      setwidth(ref.current.clientWidth);
    }
  }, [ref.current]);
  return {
    ref,
    height,
    width,
  };
}
