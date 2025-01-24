import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";

const BitcoinPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = canvas.parentElement.offsetWidth;
    const height = canvas.height = canvas.parentElement.offsetHeight;

    // Main Bitcoin position
    const centerX = width / 2;
    const centerY = height / 2;

    // Create nodes in a circular pattern
    const nodeCount = 12;
    const radius = Math.min(width, height) * 0.3; // 30% of smaller dimension
    const nodes = Array.from({ length: nodeCount }).map((_, index) => {
      const angle = (index / nodeCount) * (2 * Math.PI);
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        opacity: 0, // Start hidden
      };
    });

    // Fade in and connect lines
    let animationFrame;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = `rgba(79, 195, 247, ${node.opacity})`; // Ocean blue
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 15, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 145, 77, ${node.opacity})`; // Bitcoin orange
        ctx.fill();
        ctx.closePath();

        // Gradually increase opacity
        if (node.opacity < 1) {
          node.opacity += 0.01;
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className={styles.page}>
      {/* Left Side with Bitcoin and Network */}
      <div className={styles.leftSide}>
        {/* Background Canvas for Animation */}
        <canvas ref={canvasRef} className={styles.networkCanvas}></canvas>

        {/* Main Spinning Bitcoin */}
        <motion.div
          className={styles.bitcoinIcon}
          initial={{ scale: 0.8, rotate: 0 }}
          animate={{
            scale: [0.8, 1, 0.8],
            rotate: [0, 360],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <img src="/images/ln-atm/coin-btc.svg" alt="Bitcoin" />
        </motion.div>
      </div>

      {/* Right Side Content */}
      <div className={styles.rightSide}>
        <h1 className={styles.h1}>What is Bitcoin?</h1>
        <p className={styles.p}>
          Bitcoin is a decentralized digital currency that enables peer-to-peer
          transactions without intermediaries. Created in 2009 by Satoshi Nakamoto,
          it is the first cryptocurrency powered by blockchain technology.
          <br />
          <br />
          Bitcoin transactions are secure, transparent, and irreversible. With a
          limited supply of 21 million coins, it is often compared to "digital gold."
          <br />
          <br />
          Whether you're looking to make secure payments or explore cryptocurrency
          investment opportunities, Bitcoin is an exciting gateway into the world
          of decentralized finance.
        </p>
        <a href="https://bitcoin.org" className={styles.actionBtn}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default BitcoinPage;