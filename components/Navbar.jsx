import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/logo_pizza.png"
          alt=""
          width="60px"
          height="60px"
        ></Image>
        <span className={styles.logo}>Pizza</span>
        {/* <div className={styles.phone}> */}
        {/* <div className={styles.text}>ORDER NUMBER</div> */}
        {/* <div className={styles.phone}>1800 345 1246</div> */}
        {/* </div> */}
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>NAVEGA POR EL MENÚ</li>
          </Link>
          <li className={styles.listItem}>LOCALIZA NUESTRA TIENDAS</li>
          {/* <li className={styles.listItem}>Menu</li> */}
          {/* <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blogs</li> */}
          {/* <li className={styles.listItem}>Contacto</li> */}
        </ul>
      </div>
      <div className={styles.item}>
        <span className={styles.sesion}>Iniciar Sesión</span>
      </div>
      {/* <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="30" height="30"></Image>
        </div>

        <Link href="/cart" passHref>
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image
                src="/img/cart.png"
                alt=""
                width="30px"
                height="30px"
              ></Image>
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
