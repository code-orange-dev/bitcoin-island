import React from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.leftSide}>
        <div className={styles.anim}>
          <div className={styles.table}></div>
          <motion.div
            animate={{
              y: [0, 80],
              x: ["calc(50vw - 10px)", "calc(50vw - 590px)"], //
              opacity: [0, 1],
              rotate: [0, 10],
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className={styles.tshirt1}
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 340],
              x: ["calc(50vw - 10px)", "calc(50vw - 580px)"], //
              opacity: [0, 1],
              rotate: [0, -10],
            }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
            className={styles.tshirt2}
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 380],
              x: ["calc(50vw - 0px)", "calc(50vw - 380px)"], //
              opacity: [0, 1],
              rotate: [0, 20],
            }}
            transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
            className={styles.tshirt3}
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 120],
              x: ["calc(50vw - 10px)", "calc(50vw - 330px)"], //
              opacity: [0, 1],
            }}
            transition={{ duration: 0.3, delay: 0.9, ease: "easeOut" }}
            className={styles.totebag1}
          ></motion.div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <h1 className={styles.h1}>Warung Bitcoin</h1>
        <p className={styles.p}>
          The most unique Bitcoin merch you will ever find! From T-shirt, Mugs,
          Flags, Totebags, Posters, Hats, and much more!
          <br />
          <br />
          Let's make sure you looks good on next Bitcoin meetup!
          <br />
          Ship worldwide!
        </p>

        <a href="https://warung.btcln.app" className={styles.actionBtn}>
          Check it Out!
        </a>
      </div>
    </div>
  );
};

export default Page;
