import { memo } from "react";
import { useCallback } from "react";

import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.name}>WardrobeBox</span>
      </div>
    </div>
  );
}

export default memo(Header);
