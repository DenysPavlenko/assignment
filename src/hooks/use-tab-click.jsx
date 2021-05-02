import { useEffect } from 'react';

const useTabClick = (ref, handler) => {
  useEffect(() => {
    const listener = e => {
      var code = e.keyCode || e.which;
      /* istanbul ignore else */
      if (code === 9) {
        handler(e);
      }
    };
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, [ref, handler]);
};

export default useTabClick;
