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
  const workArea = document.getElementById(WORK_AREA_ID);
  const getDocumentHeight = Math.max(
    (workArea?.scrollHeight ?? 0),
    (workArea?.offsetHeight ?? 0),
    (workArea?.clientHeight ?? 0),
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  const getDocumentWidth = Math.max(
    (workArea?.scrollWidth ?? 0),
    (workArea?.offsetWidth ?? 0),
    (workArea?.clientWidth ?? 0),
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
  );

  const elem = arg.current?.getBoundingClientRect();
  const viewWidth = document.documentElement.clientWidth;
  const viewHeight = document.documentElement.clientHeight;
  console.log(window.pageYOffset, getDocumentHeight, elem?.top, elem?.height, elem?.bottom);
  return {
    xLeft: window.pageXOffset + (elem?.left ?? 0),
    xRight: elem ? window.pageXOffset + elem.right : undefined, // viewWidth - elem.x - elem.width
    yTop: window.pageYOffset + (elem?.top ?? 0),
    yBottom: elem ? window.pageYOffset + elem.bottom : undefined, // viewHeight - elem.top - elem.height
    width: elem?.width,
    height: elem?.height,
  };
};
