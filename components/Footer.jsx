import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image
            src="/img/logo_pizza.png"
            layout="fixed"
            width="60px"
            height="60px"
            alt=""
            objectFit="none"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.title}>Contactanos</h2>
          <p className={styles.text}>Obtener Apoyo</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>Empresa</h2>
          <p className={styles.text}>Trabaja con Nosotros</p>
          <p className={styles.text}>Encuensta de satisfaccion</p>
          <p className={styles.text}>Historia</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>Aviso Legal</h2>
          <p className={styles.text}>Aviso Legal</p>
          <p className={styles.text}>Politica de privacidad</p>
          <p className={styles.text}>T&C Ofertas Vigentes</p>
          <p className={styles.text}>Cookies</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>Preguntas</h2>
          <p className={styles.text}>Pregutas Frecuentes</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>Locales</h2>
          <p className={styles.text}>
            1654 R. Don Roas.
            <br /> New York, 5423
            <br />
            (602) 132-1232
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
