import { Product } from "@/src/types";
import { memo } from "react";
import Card from "../card";

import styles from "./styles.module.scss";

type Props = {
  onClick: (id: string) => void;
  list: Product[];
};

function Listing({ list, onClick }: Props) {
  return (
    <div className={styles.wrapper}>
      {list.map((item) => (
        <Card key={item.id} item={item} onClick={onClick} />
      ))}
    </div>
  );
}

export default memo<Props>(Listing);
