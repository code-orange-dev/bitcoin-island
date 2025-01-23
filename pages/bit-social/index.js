import React from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";

const Page = () => {
  const getRandomDelay = () => Math.random() * (5 - 3) + 1;

  return (
    <div className={styles.page}>
      <div className={styles.leftSide}>
        <div className={styles.anim}>
          <div className={styles.table}></div>
          <motion.div
            animate={{
              y: [0, 140],
              x: ["calc(50vw - 10px)", "calc(50vw - 230px)"], //
              opacity: [0, 1],
            }}
            transition={{ duration: 0.5 }}
            className={styles.handCup1}
          >
            <div className={styles.cup1}></div>

            <motion.div
              animate={{
                y: [0, 0],
                x: [140, 340],
                opacity: [1, 0],
              }}
              transition={{ duration: 0.5, delay: 1 }}
              className={styles.hand1}
            ></motion.div>
          </motion.div>
          <motion.div
            animate={{
              x: [0, 100],
              y: ["calc(100vh - 10px)", "calc(100vh - 230px)"], //
              opacity: [0, 1],
            }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className={styles.handCup2}
          >
            <div className={styles.cup2}></div>

            <motion.div
              animate={{
                y: [0, 400],
                x: [140, 140],
                opacity: [1, 0],
              }}
              transition={{ duration: 0.5, delay: 2 }}
              className={styles.hand2}
            ></motion.div>
          </motion.div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <h1 className={styles.h1}>Bit Social</h1>
        <p className={styles.p}>
          An event app powered by the Bitcoin Lightning Network that helps you
          connect with others in the Bitcoin community.
          <br />
          <br />
          Discover new people, attend meetups, and organize events with ease.
          Plus, earn Bitcoin by hosting your own meetups, with instant payments
          through the Lightning Network.
        </p>

        <a href="https://btcln.app/bit_social" className={styles.actionBtn}>
          Check it Out!
        </a>
      </div>
    </div>
  );
};

export default Page;
