"use client";

import { memo } from "react";
import cn from "classnames";

import { Product } from "../../types";
import styles from "./styles.module.scss";

type Props = {
  item: Product;
  onClick: (id: string) => void;
};

function Card({ item, onClick }: Props) {
  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.image)} onClick={() => onClick(item.id)}>
        <img src={item.img_src} alt="" />
      </div>
      <p className={styles.price}>{item.price}$</p>
      <p>{item.brand}</p>
      <p>{item.model}</p>
    </div>
  );
}

export default memo<Props>(Card);
