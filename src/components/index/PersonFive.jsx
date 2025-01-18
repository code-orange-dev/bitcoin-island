import * as React from "react";
import * as styles from "./PersonFive.module.css";
import * as motion from "motion/react-client";

const getRandomDelay = () => Math.random() + 0.1;

export const PersonFive = ({ x, y }) => {
  return (
    <div className={styles.merchantContainer}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: getRandomDelay(), // Apply random delay
          scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
        }}
        className={styles.merchantImage}
        style={{
          top: `${y}px`,
          left: `${x}px`,
        }}
      />
    </div>
  );
};
