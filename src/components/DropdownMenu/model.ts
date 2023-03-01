import { IMenuItem } from "../../types/constants";
import { EActionTypes } from "../../types/enums";

export interface IDropdownMenuProps {
  target?: React.ReactNode;
  content?: React.ReactNode;
  actionType?: EActionTypes;
  items?: Array<IMenuItem>;
}
