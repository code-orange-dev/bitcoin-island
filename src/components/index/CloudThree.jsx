import * as React from "react";
import * as styles from "./CloudThree.module.css";

export const CloudThree = ({ x, y }) => {
  return (
    <div className={styles.merchantContainer}>
      <div
        className={styles.image}
        style={{
          top: `${y}px`,
          left: `${x}px`,
        }}
      />
    </div>
  );
};
