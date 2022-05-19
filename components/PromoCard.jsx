import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/PromoCard.module.css";

const PromoCard = ({ promo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {/* <Link href={`/promos/${promo._id}`} passHref> */}
        <Image
          className={styles.image}
          src={promo.img}
          alt=""
          width="260"
          height="136"
        />
        {/* </Link> */}
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{promo.title}</h1>
        <div className={styles.prices}>
          <span className={styles.promoPrice}>${promo.promoPrice} </span>
          {promo.price && <span className={styles.price}> ${promo.price}</span>}
        </div>
        <p className={styles.desc}>{promo.desc}</p>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px"></Image>
          {/* <div className={styles.counter}>{quantity}</div> */}
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
