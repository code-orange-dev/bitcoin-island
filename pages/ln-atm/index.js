import React from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";

const Page = () => {
  const getRandomDelay = () => Math.random() * (5 - 3) + 1;

  return (
    <div className={styles.page}>
      <div className={styles.leftSide}>
        <div className={styles.flashingLightningBg} />
        <div className={styles.lightnings}>
          <motion.div
            className={styles.lightningOne}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0, 0, 0, 0.4, 1, 0.3, 0.2, 0.1, 0, 0, 0, 0],
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: getRandomDelay(),
            }}
          />
          <motion.div
            className={styles.lightningTwo}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0, 0, 0, 0.4, 1, 0.3, 0.2, 0.1, 0, 0, 0, 0],
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: getRandomDelay(),
            }}
          />
          <motion.div
            className={styles.lightningThree}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0, 0, 0, 0.4, 1, 0.3, 0.2, 0.1, 0, 0, 0, 0],
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: getRandomDelay(),
            }}
          />
        </div>

        <div className={styles.anim}>
          <motion.div
            animate={{
              scale: [1, 1, 1, 1, 1.01, 1, 1],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={{
              zIndex: 7,
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                y: [-100, 300, 290, 300, 299],
                x: [200],
                opacity: 1,
                scale: [1, 1.1],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: 0,
                repeatDelay: 1,
              }}
              className={styles.atm}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: [400],
              x: [-300, 250],
              opacity: [0, 0, 1, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1,
              delay: 1,
            }}
            className={styles.coinIdr}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: [400],
              x: [250, 700],
              opacity: 1,
              rotate: [0, 360],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1,
              delay: 2,
            }}
            className={styles.coinBtc}
          />
        </div>
      </div>
      <div className={styles.rightSide}>
        <h1 className={styles.h1}>Lightning ATM</h1>
        <p className={styles.p}>
          This application is built under the belief that the Bitcoin Lightning
          Network is a neutral and powerful technology worth exploring.
          <br />
          <br />
          Unfortunately, there is no easy demonstration app in Indonesia that is
          both accessible and affordable for users to learn how to use it. This
          ATM makes it possible for everyone to start learning about Bitcoin
          without worrying about losing a lot of money.
          <br />
          <br />
          Starting from IDR 1,500 ($0.1) you can begin experimenting with
          Bitcoin supafast!
        </p>

        <a href="https://btcln.app/atm" className={styles.actionBtn}>
          Check it Out!
        </a>
      </div>
    </div>
  );
};

export default Page;
