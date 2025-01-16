import * as React from "react";
import * as styles from "./MainTitle.module.css";
import * as motion from "motion/react-client";

export const MainTitle = () => {
  return (
    <div className={styles.mainTitle}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.2,
          scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
        }}
        whileHover={{ scale: 1.1, duration: 0.1 }}
      >
        Bitcoin
        <br /> Island
      </motion.div>
    </div>
  );
};
