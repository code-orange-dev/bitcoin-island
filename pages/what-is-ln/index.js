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
                        initial={{ opacity: 0 }}
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
                        initial={{ opacity: 0 }}
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
                        initial={{ opacity: 0 }}
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
                    {/* Left falling coin */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{
                            opacity: 1,
                            y: ["-100vh", "100vh"],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                        className={styles.coinBtc}
                        style={{ left: "5%" }}
                    />

                    {/* Center coin with bounce effect */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{
                            opacity: 1,
                            y: [0, 300],  // Make it fall slowly and stop at 200px.
                            scale: [3, 3],  // Increase size
                        }}
                        transition={{
                            duration: 3,  // Set to 3 seconds for slow fall
                            ease: "easeOut",
                            repeat: 0,
                        }}
                        className={styles.coinBtc}
                        style={{
                            left: "42%",
                            transform: "translateX(-50%)",  // Center horizontally
                        }}
                    />


                    {/* Right falling coin */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{
                            opacity: 1,
                            y: ["-100vh", "100vh"],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                            repeatDelay: 1,
                            delay: 1.5
                        }}
                        className={styles.coinBtc}
                        style={{ left: "80%" }}
                    />
                </div>
            </div>
            <div className={styles.rightSide}>
                <h1 className={styles.h1}>How Lightning Network Works</h1>
                <p className={styles.p}>
                    The Bitcoin Lightning Network is a second-layer solution designed to enable faster and more scalable transactions on the Bitcoin blockchain. It works by creating a network of payment channels between users. These channels allow users to conduct transactions off-chain, which are then settled on the blockchain. This process significantly reduces the time and cost associated with Bitcoin transactions.
                    <br />
                    <br />
                </p>
                <h2 className={styles.h2}>Here's how it works:</h2>
                <ul>
                    <li className={styles.liItem}>
                        <strong>Payment Channels:</strong>
                        <span className={styles.liContent}> Users open a payment channel by locking up some Bitcoin in a smart contract. This allows them to make multiple transactions without recording every single one on the blockchain.</span>
                    </li>
                    <li className={styles.liItem}>
                        <strong>Off-Chain Transactions:</strong>
                        <span className={styles.liContent}> Once a payment channel is open, users can make instant, low-cost transactions. These transactions are only recorded on the blockchain when the channel is closed.</span>
                    </li>
                    <li className={styles.liItem}>
                        <strong>Routing Payments:</strong>
                        <span className={styles.liContent}> The Lightning Network uses a routing system to send payments through multiple channels, allowing users to send payments to anyone on the network, even if they don't have a direct channel open.</span>
                    </li>
                    <li className={styles.liItem}>
                        <strong>Security:</strong>
                        <span className={styles.liContent}> The Lightning Network uses the same cryptographic principles as Bitcoin to ensure the security of transactions, ensuring that no one can cheat or double-spend.</span>
                    </li>
                </ul>

                <br />
                <p className={styles.p}> The Lightning Network is rapidly growing and offers great potential for reducing transaction costs and increasing the speed of payments for Bitcoin users around the world.</p>
            </div>
        </div>
    );
};

export default Page;