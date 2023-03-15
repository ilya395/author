import { MIN_WIDTH } from "../../types/constants";

export type TElement = React.MutableRefObject<HTMLButtonElement | HTMLDivElement | null>;

export const getProportions = (arg: TElement) => {
  const elem = arg.current?.getBoundingClientRect();
  return {
    width: elem?.width,
    height: elem?.height,
  };
}

export const getСoordinates = (arg: TElement, offset = true) => {
  const getDocumentHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  const getDocumentWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth,
  );

  const innerWidth = window.innerWidth;

  const elem = arg.current?.getBoundingClientRect();

  const xLeft = offset ? (elem?.x ?? 0) + window.pageXOffset : (elem?.x ?? 0);
  const xRight = offset ? (getDocumentWidth - (elem?.x ?? 0) - window.pageXOffset) : (document.documentElement.clientWidth - (elem?.x ?? 0));
  const yTop = offset ? (window.pageYOffset + (elem?.y ?? 0)) : (elem?.y ?? 0);
  const yBottom = offset ? (getDocumentHeight - (elem?.y ?? 0) - window.pageYOffset) : (document.documentElement.clientHeight - (elem?.y ?? 0));

  return {
    xLeft: elem ? xLeft : undefined,
    xRight: elem ? xRight : undefined,
    yTop: elem ? yTop : undefined,
    yBottom: elem ? yBottom : undefined,
    width: elem?.width,
    height: elem?.height,
  };
};

export const computedDocumentCoordinates = (object: {
  targetRef: React.MutableRefObject<HTMLButtonElement | null>;
  menuRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const { targetRef, menuRef } = object;

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
}

export const computedWindowCoordinates = (object: {
  targetRef: React.MutableRefObject<HTMLButtonElement | null>;
  menuRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const { targetRef, menuRef } = object;

  const targetСoordinates = getСoordinates(targetRef, false);

  const menuCoordinates = getСoordinates(menuRef, false);

  let left = targetСoordinates.xLeft;
  if (targetСoordinates?.xRight && targetСoordinates.xRight < MIN_WIDTH) {
    left = (targetСoordinates?.xLeft ?? 0) + (targetСoordinates?.width ?? 0) - (menuCoordinates?.width ?? 0);
  }

  let top = (targetСoordinates?.yTop ?? 0) + (targetСoordinates?.height ?? 0);
  if (targetСoordinates?.yBottom && targetСoordinates.yBottom < MIN_WIDTH) {
    top = (targetСoordinates?.yTop ?? 0) - (menuCoordinates?.height ?? 0);
  }

  return {
    top,
    left,
  }
}

export const computedCoordinates = (object: {
  targetRef: React.MutableRefObject<HTMLButtonElement | null>;
  menuRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const { targetRef, menuRef } = object;

  const targetDocСoordinates = getСoordinates(targetRef);

  const menuDocCoordinates = getСoordinates(menuRef);

  const targetWinСoordinates = getСoordinates(targetRef, false);

  const menuWinCoordinates = getСoordinates(menuRef, false);

  let top = (targetDocСoordinates?.yTop ?? 0) + (targetDocСoordinates?.height ?? 0);
  if (targetDocСoordinates?.yBottom && targetDocСoordinates.yBottom < (menuDocCoordinates?.height ?? MIN_WIDTH)) {
    top = (targetDocСoordinates?.yTop ?? 0) - (menuDocCoordinates?.height ?? 0);
  }
  if (targetWinСoordinates?.yBottom && targetWinСoordinates.yBottom < (menuWinCoordinates?.height ?? MIN_WIDTH)) {
    top = (targetDocСoordinates?.yTop ?? 0) - (menuWinCoordinates?.height ?? 0);
  }

  let left = targetDocСoordinates.xLeft;
  if (targetDocСoordinates?.xRight && targetDocСoordinates.xRight < MIN_WIDTH) {
    left = (targetDocСoordinates?.xLeft ?? 0) + (targetDocСoordinates?.width ?? 0) - (menuDocCoordinates?.width ?? 0);
  }
  if (targetWinСoordinates?.xRight && targetWinСoordinates.xRight < MIN_WIDTH) {
    left = (targetDocСoordinates?.xLeft ?? 0) + (targetDocСoordinates?.width ?? 0) - (menuWinCoordinates?.width ?? 0);
  }

  return {
    top,
    left,
  }
}
