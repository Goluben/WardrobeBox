import { memo } from "react";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

import Button from "../my-button";

import styles from "./styles.module.scss";

function Header() {
  const router = useRouter();

  const goToCreate = () => {
    router.push("/create");
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.name} onClick={goToHome}>
          WardrobeBox
        </span>
        <Button onClick={goToCreate}>New</Button>
      </div>
    </div>
  );
}

export default memo(Header);
