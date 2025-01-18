import * as React from "react";
import * as styles from "./CloudFour.module.css";

export const CloudFour = ({ x, y }) => {
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
