import { FC } from "react";
import ShareIcon from "../components/svgs/Share";
import { IIconProps } from "./base";

export const MIN_WIDTH = 260;

export const WORK_AREA_ID = 'work-area';

export interface IMenuItem {
  id: number;
  label: string;
  icon: FC<IIconProps>;
  props?: IIconProps;
  callback?: () => void;
}
export const menuItems = [
  {
    id: 1,
    label: 'Поделиться',
    icon: ShareIcon,
    props: {
      width: 16,
      height: 16,
    },
  },
  {
    id: 2,
    label: 'Поделиться',
    icon: ShareIcon,
    props: {
      width: 16,
      height: 16,
    },
  },
  {
    id: 3,
    label: 'Поделиться',
    icon: ShareIcon,
    props: {
      width: 16,
      height: 16,
    },
  },
] as Array<IMenuItem>;