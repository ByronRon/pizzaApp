import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/OrderType.module.css";

const OrderType = ({ setClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        ¡Nos renovamos! ¿Cómo quieres ordenar hoy?
      </div>
      <div className={styles.wrapper}>
        {/* <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span> */}
        <h3>A DOMICILIO</h3>
        <h3>INGRESA TU DIRECCION DE DOMICILIO</h3>
        <button className={styles.createButton}>Usar mi ubicacion</button>

        <div className={styles.item}>
          <label className={styles.label}>Direccion de envio</label>
          <div className={styles.extra}>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className={styles.extraButton}>Mapa</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderType;
