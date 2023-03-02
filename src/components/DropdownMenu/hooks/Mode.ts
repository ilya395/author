import { useMemo } from "react";
import { EActionTypes } from "../../../types/enums";

export const useMode = (actionType: EActionTypes) => {
  const isOnClick = useMemo(() => actionType === EActionTypes.Click, [actionType]);
  const isOnHover = useMemo(() => actionType === EActionTypes.Hover, [actionType]);
  return {
    isOnClick,
    isOnHover
  };
}