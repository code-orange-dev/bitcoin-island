import * as React from "react";
import * as styles from "./CloudTwo.module.css";

export const CloudTwo = ({ x, y }) => {
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
