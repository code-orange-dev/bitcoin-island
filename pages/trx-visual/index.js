'use client'

import React, { useRef, useEffect, useState } from "react";
import * as THREE from 'three';
import styles from './index.module.css';
import Head from "next/head";

const transactionSpeeds = [
  { name: 'Bitcoin Lightning', tps: 1000000, color: 0xff8c00, owner: 'Public/Open Source' },
  { name: 'Visa', tps: 65000, color: 0xffffff, owner: 'Company' },
  { name: 'PayPal', tps: 1700, color: 0xffffff, owner: 'Company' },
  { name: 'QRIS', tps: 1500, color: 0xffffff, owner: 'State Owned' },
  { name: 'Ethereum', tps: 20, color: 0xffffff, owner: 'Public/Open Source' },
  { name: 'Bitcoin On-Chain', tps: 7, color: 0xff8c00, owner: 'Public/Open Source' }
];

let audioContext;

const Page = () => {
  const containerRef = useRef(null);
  const canvasRefs = useRef([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const soundTimeoutsRef = useRef([]);

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (dimensions.height === 0) return;

    canvasRefs.current.forEach((canvas) => {
      if (canvas && canvas._renderer) {
        canvas._renderer.dispose();
      }
    });

    const minTps = Math.min(...transactionSpeeds.map(item => item.tps));

    canvasRefs.current.forEach((canvasRef, index) => {
      if (!canvasRef) return;

      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef,
        alpha: true,
        antialias: true
      });
      renderer.setSize(canvasRef.clientWidth, canvasRef.clientHeight);
      canvasRef._renderer = renderer;

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(
        -1, 1, 1, -1, 0.1, 1000
      );
      camera.position.z = 10;

      const tps = transactionSpeeds[index].tps;

      const minCircleCount = 7;
      const circleCount = Math.max(
        minCircleCount,
        Math.round((tps / minTps) * 0.5)
      );

      const circleGeometry = new THREE.BufferGeometry();
      const posArray = new Float32Array(circleCount * 3);
      const speedArray = new Float32Array(circleCount);
      const colorArray = new Float32Array(circleCount * 3);

      const initialCirclePercentage = 0.7;

      for (let i = 0; i < circleCount * 3; i += 3) {
        const streamWidth = tps > 10000 ? 1.5 : 1;
        posArray[i] = (Math.random() - 0.5) * streamWidth;

        if (Math.random() < initialCirclePercentage) {
          posArray[i + 1] = Math.random() * 2 - 1;
        } else {
          posArray[i + 1] = 1 + Math.random() * 1;
        }

        posArray[i + 2] = 0;

        const baseSpeed = 0.03;
        const tpsSpeed = (tps / 1000000) * 0.1;
        speedArray[i / 3] = baseSpeed + tpsSpeed + (Math.random() * 0.02);

        if (tps > 10000 && Math.random() < 0.7) {
          colorArray[i] = 0;
          colorArray[i + 1] = 0;
          colorArray[i + 2] = 0;
        } else {
          const color = new THREE.Color(transactionSpeeds[index].color);
          colorArray[i] = color.r;
          colorArray[i + 1] = color.g;
          colorArray[i + 2] = color.b;
        }
      }

      circleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      circleGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

      const minSize = 2;
      const maxSize = 4;
      const sizeFactor = Math.min(1, Math.max(0.5, tps / 1000000));
      const circleSize = minSize + (maxSize - minSize) * sizeFactor;

      const circleMaterial = new THREE.PointsMaterial({
        size: circleSize,
        vertexColors: true,
        transparent: true,
        opacity: 1,
        sizeAttenuation: false
      });

      const circleMesh = new THREE.Points(circleGeometry, circleMaterial);
      scene.add(circleMesh);

      const animate = () => {
        const id = requestAnimationFrame(animate);
        canvasRef._animationId = id;

        const positions = circleGeometry.attributes.position.array;

        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] -= speedArray[i / 3];

          if (positions[i + 1] < -1.2) {
            const streamWidth = tps > 10000 ? 0.8 : 0.4;
            positions[i] = (Math.random() - 0.5) * streamWidth;
            positions[i + 1] = 1 + Math.random() * 0.5;
          }
        }

        circleGeometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      canvasRefs.current.forEach((canvas) => {
        if (canvas) {
          if (canvas._animationId) {
            cancelAnimationFrame(canvas._animationId);
          }
          if (canvas._renderer) {
            canvas._renderer.dispose();
          }
        }
      });
    };
  }, [dimensions]);

  const createSound = (frequency, duration, isNoise = false) => {
    if (typeof window !== 'undefined') {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }

      if (isNoise) {
        const bufferSize = audioContext.sampleRate * duration / 1000;
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const output = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoiseSource = audioContext.createBufferSource();
        const gainNode = audioContext.createGain();

        whiteNoiseSource.buffer = buffer;
        whiteNoiseSource.connect(gainNode);
        gainNode.connect(audioContext.destination);

        gainNode.gain.setValueAtTime(0.025, audioContext.currentTime);
        whiteNoiseSource.start();

        setTimeout(() => {
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
          setTimeout(() => whiteNoiseSource.stop(), 50);
        }, duration);

      } else {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filterNode = audioContext.createBiquadFilter();

        oscillator.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.type = 'square';
        oscillator.frequency.value = frequency;
        filterNode.type = 'bandpass';
        filterNode.frequency.value = frequency;
        filterNode.Q.value = 1; // Reduced Q value for broader frequency response

        gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);

        oscillator.start();
        setTimeout(() => {
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.0001);
          setTimeout(() => oscillator.stop(), 10); // Reduced duration
        }, duration / 4); // Reduced duration
      }
    }
  };

  // Modify the useEffect that handles sound
  useEffect(() => {
    if (hoveredIndex !== null) {
      const tps = transactionSpeeds[hoveredIndex].tps;
      const baseInterval = Math.max(1, 80 - (100 * (tps / 100))); // Reduced base interval
      const playSound = () => {
        const randomInterval = baseInterval + (Math.random() * baseInterval / 4);

        const isHighTPS = tps > 500000;
        if (isHighTPS) {
          createSound(0, 5, true); // Reduced duration
        } else {
          const baseFrequency = 2000; // Increased base frequency
          const frequency = baseFrequency + (tps / 100);
          createSound(frequency, 1, false); // Reduced duration
        }

        soundTimeoutsRef.current[hoveredIndex] = setTimeout(playSound, randomInterval);
      };

      playSound();

      return () => {
        if (soundTimeoutsRef.current[hoveredIndex]) {
          clearTimeout(soundTimeoutsRef.current[hoveredIndex]);
        }
      };
    }
  }, [hoveredIndex]);

  return (
    <div ref={containerRef} className={styles.container}>
      <Head>
        <title>World's Money Throughput</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>World's Money Throughput</h1>

      <div className={styles.visualizationContainer}>
        {transactionSpeeds.map((speed, index) => (
          <div
            key={speed.name}
            className={`${styles.transactionColumn} ${hoveredIndex === index ? styles.transactionColumnHovered : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={styles.canvasContainer}>
              <canvas
                ref={el => canvasRefs.current[index] = el}
                className={styles.transactionCanvas}
              />
              <div className={styles.statsContainer}>
                <h3 className={styles.statsLabel}>{speed.tps} TPS</h3>
                <h3 className={styles.statsLabel}>{speed.name.toUpperCase()}</h3>
                <h3 className={`${styles.statsLabel} ${styles.statsLabelNoMargin}`}>{speed.owner}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
