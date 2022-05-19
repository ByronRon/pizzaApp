import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link href={`/products/${pizza._id}`} passHref>
          <Image src={pizza.img} alt="" width="500" height="500" />
        </Link>
      </div>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
