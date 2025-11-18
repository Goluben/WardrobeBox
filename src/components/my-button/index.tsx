"use client";

import { ReactNode, memo } from "react";
import cn from "classnames";

import { Color, Size } from "../../types";

import styles from "./styles.module.scss";

type Props = {
  color?: Color;
  size?: Size;
  onClick?: () => void;
  children: ReactNode;
};

function Button({ color = Color.Aqua, size = "m", children, onClick }: Props) {
  return (
    <button
      className={cn(
        styles.button,
        styles[`button__${color}`],
        styles[`button__${size}`]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default memo<Props>(Button);
