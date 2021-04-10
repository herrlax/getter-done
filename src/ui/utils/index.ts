import { useEffect, useRef } from 'react';

const useDebounce = () => {
  const timeoutID = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (typeof timeoutID.current !== 'undefined') {
        clearTimeout(timeoutID.current);
      }
    };
  }, []);

  const debounce = (callback: () => void, delay: number) => {
    if (typeof timeoutID.current !== 'undefined') {
      clearTimeout(timeoutID.current);
    }

    timeoutID.current = setTimeout(callback, delay);
  };

  return debounce;
};

export { useDebounce };
