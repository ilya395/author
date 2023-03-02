import { useEffect, useState } from "react";
import { MIN_WIDTH } from "../../../types/constants";
import { getСoordinates } from "../helpers";

export const useCoordinates = (object: {
  targetRef: React.MutableRefObject<HTMLButtonElement | null>;
  menuRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const { targetRef, menuRef } = object;

  const computedCoordinates = () => {
    const targetСoordinates = getСoordinates(targetRef);

    const menuCoordinates = getСoordinates(menuRef);

    let left = targetСoordinates.xLeft;
    if (targetСoordinates?.xRight && targetСoordinates.xRight < MIN_WIDTH) {
      left = (targetСoordinates?.xLeft ?? 0) + (targetСoordinates?.width ?? 0) - (menuCoordinates?.width ?? 0); // - (targetСoordinates?.width ?? 0);
    }

    let top = (targetСoordinates?.yTop ?? 0) + (targetСoordinates?.height ?? 0);
    if (targetСoordinates?.yBottom && targetСoordinates.yBottom < MIN_WIDTH) {
      top = (targetСoordinates?.yTop ?? 0) - (menuCoordinates?.height ?? 0);
    }

    return {
      top,
      left,
    }
  };

  const [obj, setObj] = useState(computedCoordinates());

  useEffect(() => {
    setObj(computedCoordinates());
  }, [targetRef.current, menuRef.current]);

  useEffect(() => {

    const handle = () => {
      setObj(computedCoordinates());
    };

    window.addEventListener('resize', handle);

    return () => {
      window.removeEventListener('resize', handle);
    };
  }, [targetRef.current, menuRef.current]);

  return obj;
}