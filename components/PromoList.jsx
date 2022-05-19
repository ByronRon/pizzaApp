import React from "react";
import styles from "../styles/PromoList.module.css";
import PromoCard from "./PromoCard";

const PromoList = ({ promoList }) => {
  const title = "OFERTAS POR TIEMPO LIMITADO";
  const desc = ``;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.wrapper}>
        {promoList.map((promo) => (
          <PromoCard key={promo._id} promo={promo} />
        ))}
      </div>
    </div>
  );
};

export default PromoList;
