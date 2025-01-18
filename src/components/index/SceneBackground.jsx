import * as React from "react";
import * as styles from "./SceneBackground.module.css";

export const SceneBackground = ({ children }) => {
  return (
    <div className={styles.sceneBackground}>
      <div className={styles.bgOcean}></div>

      {/* Clouds */}
      <div className={styles.clouds}>{children}</div>
    </div>
  );
};
