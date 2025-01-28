import Head from "next/head";
import styles from "./index.module.css";
import { MainTitle } from "../src/components/index/MainTitle";
import { SceneBackground } from "../src/components/index/SceneBackground";
import { SceneIsland } from "../src/components/index/SceneIsland";
import { ItemMerchant } from "../src/components/index/ItemMerchant";
import { MerchantTwo } from "../src/components/index/MerchantTwo";
import { MerchantThree } from "../src/components/index/MerchantThree";
import { MerchantBitcoin } from "../src/components/index/MerchantBitcoin";
import { MerchantLightningAtm } from "../src/components/index/MerchantLightningAtm";
import { MerchantLightningToGopay } from "../src/components/index/MerchantLightningToGopay";
import { MerchantBitcoinHouse } from "../src/components/index/MerchantBitcoinHouse";
import { MerchantBitSocial } from "../src/components/index/MerchantBitSocial";
import { MerchantWarungBitcoin } from "../src/components/index/MerchantWarungBitcoin";
import { MerchantBusStop } from "../src/components/index/MerchantBusStop";
import { MerchantLightningSim } from "../src/components/index/MerchantLightningSim";
import { MerchantQr } from "../src/components/index/MerchantQr";
import { DecorFlowerOne } from "../src/components/index/DecorFlowerOne";
import { PersonOne } from "../src/components/index/PersonOne";
import { PersonTwo } from "../src/components/index/PersonTwo";
import { PersonThree } from "../src/components/index/PersonThree";
import { PersonFour } from "../src/components/index/PersonFour";
import { PersonFive } from "../src/components/index/PersonFive";
import { PersonSix } from "../src/components/index/PersonSix";
import { CloudOne } from "../src/components/index/CloudOne";
import { CloudTwo } from "../src/components/index/CloudTwo";
import { CloudThree } from "../src/components/index/CloudThree";
import { CloudFour } from "../src/components/index/CloudFour";

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
          <MerchantBusStop to="https://vis-btc.btcln.app/v/btc" x={240} y={300} />
          <MerchantBitcoin to="/what-is-bitcoin" x={2 * 175} y={2 * 170} />
          <ItemMerchant to="/sample-page" x={3 * 160} y={2 * 160} />
          <MerchantTwo to="/bitcoin-indonesia" x={500} y={200} />
          <MerchantThree to="/sample-page" x={400} y={200} />
          <MerchantBitcoinHouse to="/bitcoin-house" x={580} y={173} />
          <MerchantLightningAtm to="/ln-atm" x={760} y={260} />
          <MerchantLightningToGopay to="/ln-to-gopay" x={720} y={273} />
          <MerchantBitSocial to="/bit-social" x={800} y={300} />
          <MerchantWarungBitcoin to="/warung-bitcoin" x={600} y={300} />
          <MerchantLightningSim to="/what-is-ln" x={440} y={280} />
          <MerchantQr to="/bitcoin-federation" x={485} y={430} />
          <MerchantQr to="/bitcoin-federation" x={485} y={430} />

          {/* Decoration */}
          <DecorFlowerOne x={340} y={440} />
          <DecorFlowerOne x={600} y={270} />

          {/* Person */}
          <PersonOne x={700} y={370} />
          <PersonTwo x={540} y={370} />
          <PersonThree x={400} y={470} />
          <PersonFour x={580} y={400} />
          <PersonFive x={300} y={370} />
          <PersonSix x={550} y={270} />
        </SceneIsland>
        <SceneBackground>
          {/* Cloud */}
          <CloudOne x={100} y={40} />
          <CloudTwo x={440} y={20} />
          <CloudThree x={1000} y={30} />
          <CloudFour x={1480} y={50} />
        </SceneBackground>
      </main>
    </div>
  );
}
