import React from "react";
import Image from "next/image";
import styles from "./Loading.module.scss";

const Loading = ({ loading }) => {
  console.log("loading State", loading);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={
        loading
          ? `container ${styles.container__loading}`
          : `container ${styles.container__loaded}`
      }
    >
      <Image
        src="/images/tomosu-load-roop.gif"
        width={300}
        height={100}
        quality={100}
      />
    </div>
  );
};

export default Loading;
