import React, { useEffect } from "react";


const useOnClickOutside = (callback, ref) => {

  useEffect(
    () => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }

      }

      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };

    }, [ref, callback])

}

export default useOnClickOutside;
