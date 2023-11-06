import { FC } from "react";
import KeyboardArrowLeft from "../../../assets/icons/KeyboardArrowLeft.tsx";
import { classNames, NavigationButtonProps } from "./Pagination.tsx";

export const PrevButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick}>
      <KeyboardArrowLeft className={classNames.icon} />
    </button>
  )
}