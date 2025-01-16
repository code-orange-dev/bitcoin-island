import Head from "next/head";
import styles from "./index.module.css";
import { MainTitle } from "../src/components/index/MainTitle";
import { SceneBackground } from "../src/components/index/SceneBackground";
import { SceneIsland } from "../src/components/index/SceneIsland";
import { ItemMerchant } from "../src/components/index/ItemMerchant";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bitcoin Island</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Title */}
        <MainTitle />

        <SceneIsland>
          {/* Links */}
          <ItemMerchant to="/what-is-bitcoin" x={2 * 160} y={2 * 160} />
          <ItemMerchant to="/sample-page" x={3 * 160} y={2 * 160} />
        </SceneIsland>
        <SceneBackground />
      </main>
    </div>
  );
}
