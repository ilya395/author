import { IMenuItem } from "../../types/constants";
import { EActionTypes } from "../../types/enums";

export interface IDropdownMenuProps<P> {
  target: {
    component: React.FunctionComponent;
    componentProps: P & { children: JSX.Element; };
  };
  actionType?: EActionTypes;
  items?: Array<IMenuItem>;
}
