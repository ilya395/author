import { WORK_AREA_ID } from "../../types/constants";

export type TElement = React.MutableRefObject<HTMLButtonElement | HTMLDivElement | null>;

export const getProportions = (arg: TElement) => {
  const elem = arg.current?.getBoundingClientRect();
  return {
    width: elem?.width,
    height: elem?.height,
  };
}

export const getСoordinates = (arg: TElement) => {
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

  console.log(elem?.height, getDocumentHeight, elem, window.pageYOffset);
  return {
    xLeft: (elem?.x ?? 0) + window.pageXOffset,
    xRight: elem ? getDocumentWidth - elem.x - window.pageXOffset : undefined,
    yTop: window.pageYOffset + (elem?.y ?? 0),
    yBottom: elem ? getDocumentHeight - elem.y - window.pageYOffset : undefined,
    width: elem?.width,
    height: elem?.height,
  };
};
