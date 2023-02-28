export const getProportions = (arg: React.MutableRefObject<HTMLButtonElement | HTMLDivElement | null>) => {
  const elem = arg.current?.getBoundingClientRect();
  return {
    width: elem?.width,
    height: elem?.height,
  };
}

export const getСoordinates = (arg: React.MutableRefObject<HTMLButtonElement | HTMLDivElement | null>) => {
  const elem = arg.current?.getBoundingClientRect();
  const viewWidth = document.documentElement.clientWidth;
  const viewHeight = document.documentElement.clientHeight;
  return {
    xLeft: elem?.x,
    xRight: elem ? viewWidth - elem.x - elem.width : undefined,
    yTop: elem?.top,
    yBottom: elem ? viewHeight - elem.top - elem.height : undefined,
    width: elem?.width,
    height: elem?.height,
  };
};