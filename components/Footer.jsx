import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>SAD JKLJ AKAJAKL, AKJKLAJLAKA.</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Roas.
            <br /> New York, 5423
            <br />
            (602) 132-1232
          </p>
          <p className={styles.text}>
            1654 R. Don Roas.
            <br /> New York, 5423
            <br />
            (602) 132-1232
          </p>
          <p className={styles.text}>
            1654 R. Don Roas.
            <br /> New York, 5423
            <br />
            (602) 132-1232
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY -SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
