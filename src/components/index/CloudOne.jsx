import * as React from "react";
import * as styles from "./CloudOne.module.css";

export const CloudOne = ({ x, y }) => {
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
