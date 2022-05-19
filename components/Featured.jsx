import styles from "../styles/Featured.module.css";
import React, { useState } from "react";
import Image from "next/image";
import OrderType from "./OrderType";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image
            src="/img/background.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
          <OrderType />
        </div>
      </div>
    </div>
  );
};

export default Featured;
