import Head from "next/head";
import styles from "./index.module.css";
import { MainTitle } from "../src/components/index/MainTitle";
import { SceneBackground } from "../src/components/index/SceneBackground";
import { SceneIsland } from "../src/components/index/SceneIsland";
import { ItemMerchant } from "../src/components/index/ItemMerchant";
import { MerchantTwo } from "../src/components/index/MerchantTwo";
import { MerchantThree } from "../src/components/index/MerchantThree";
import {MerchantLightningAtm} from "../src/components/index/MerchantLightningAtm";
import {MerchantLightningToGopay} from "../src/components/index/MerchantLightningToGopay";
import {MerchantBitcoinHouse} from "../src/components/index/MerchantBitcoinHouse";
import {MerchantBitSocial} from "../src/components/index/MerchantBitSocial";
import {MerchantWarungBitcoin} from "../src/components/index/MerchantWarungBitcoin";
import {MerchantBusStop} from "../src/components/index/MerchantBusStop";
import {MerchantLightningSim} from "../src/components/index/MerchantLightningSim";
import {MerchantQr} from "../src/components/index/MerchantQr";
import {DecorFlowerOne} from "../src/components/index/DecorFlowerOne";

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
          <MerchantBusStop to="/bus-stop" x={240} y={300} />
          <ItemMerchant to="/what-is-bitcoin" x={2 * 160} y={2 * 160} />
          <ItemMerchant to="/sample-page" x={3 * 160} y={2 * 160} />
          <MerchantTwo to="/sample-page" x={500} y={200} />
          <MerchantThree to="/sample-page" x={400} y={200} />
          <MerchantBitcoinHouse to="/bitcoin-house" x={580} y={173} />
          <MerchantLightningAtm to="/ln-atm" x={760} y={260} />
          <MerchantLightningToGopay to="/ln-to-gopay" x={720} y={273} />
          <MerchantBitSocial to="/bit-social" x={800} y={300} />
          <MerchantWarungBitcoin to="/warung-bitcoin" x={600} y={300} />
          <MerchantLightningSim to="/ln-sim" x={440} y={280} />
          <MerchantQr to="/qr" x={485} y={430} />

          {/* Decoration */}
          <DecorFlowerOne x={340} y={440} />
          <DecorFlowerOne x={600} y={270} />
        </SceneIsland>
        <SceneBackground />
      </main>
    </div>
  );
}
  