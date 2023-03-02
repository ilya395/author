import { useEffect, useState } from "react";

export const useIntersection = (object: {
  targetRef: React.MutableRefObject<HTMLButtonElement | null>;
}) => {
  const { targetRef } = object;

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        };
      })
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef.current]);

  return {
    isVisible,
  };
}