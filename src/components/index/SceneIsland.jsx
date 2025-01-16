import * as React from "react";
import * as styles from "./SceneIsland.module.css";

export const SceneIsland = ({children}) => {
  return (
    <div className={styles.islandContainer}>
      {children}
      <div className={styles.bgLand}></div>
    </div>
  );
};
