import { useEffect } from "react";

export const useClick = (object: {
  targetRef: React.MutableRefObject<HTMLButtonElement | null>;
  menuRef: React.MutableRefObject<HTMLDivElement | null>;
  callback?: () => void;
}) => {
  const { targetRef, menuRef, callback } = object;
  useEffect(() => {
    const handle = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        targetRef.current !== target &&
        (target && !targetRef.current?.contains(target)) &&
        menuRef.current !== target &&
        (target && !menuRef.current?.contains(target))
      ) {
        callback?.();
      }
    };
    document.addEventListener('click', handle);
    return () => {
      document.removeEventListener('click', handle);
    };
  }, [targetRef.current, menuRef.current]);
}
