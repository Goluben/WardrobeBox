import { memo } from "react";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>Footer in progress...</div>
    </div>
  );
}

export default memo(Footer);
