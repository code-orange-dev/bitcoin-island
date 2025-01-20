import React from "react";
import styles from "./index.module.css";

const Page = () => {
  return (
    <div className={styles.tweetContainer}>
      <blockquote className="twitter-tweet" data-theme="dark">
        <p lang="en" dir="ltr">
          Thanks to amazing Bitcoiners like you, the Bitcoin House Bali has come
          to life! 🧡 ... But this was only the beginning – the real work
          started, and we need your continued support to keep it running. <br />
          <br />
          👉 Please check out our updated Geyser page with some PoW from 2024:…{" "}
          <a href="https://t.co/esmMXaI2Ub">pic.twitter.com/esmMXaI2Ub</a>
        </p>
        &mdash; Bitcoin House Bali (@btchousebali){" "}
        <a href="https://twitter.com/btchousebali/status/1870265481891893735?ref_src=twsrc%5Etfw">
          December 21, 2024
        </a>
      </blockquote>{" "}
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </div>
  );
};

export default Page;
