import { useCallback, useEffect, useState } from "react";
import { computedCoordinates } from "../helpers";

export const useCoordinates = (object: {
  targetRef: React.MutableRefObject<HTMLButtonElement | null>;
  menuRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const { targetRef, menuRef } = object;

  const updateCoordinates = () => {
    return computedCoordinates({
      targetRef,
      menuRef,
    });
  };

  const [obj, setObj] = useState(updateCoordinates());

  const handle = useCallback(() => {
    setObj(updateCoordinates());
  }, [targetRef.current, menuRef.current]);

  useEffect(() => {
    setObj(updateCoordinates());
  }, [targetRef.current, menuRef.current]);

  useEffect(() => {
    window.addEventListener('resize', handle);

    return () => {
      window.removeEventListener('resize', handle);
    };
  }, [targetRef.current, menuRef.current, handle]);

  return obj;
}