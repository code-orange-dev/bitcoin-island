import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bitcoin Island</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          {/* Title */}
          <div className={styles.mainTitle}>Bitcon Island</div>

          {/* Links */}
          <a href="/what-is-bitcoin">What is Bitcoin</a>
          <a href="/sample-page">Sample Page</a>
       </main>
    </div>
  );
}
