import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import OrderType from "../components/OrderType";
import PromoList from "../components/PromoList";
import styles from "../styles/Home.module.css";

export default function Home({ promoList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza App</title>
        <meta name="description" content="Best pizza app" />
        <link rel="icon" href="/logo_pizza.png" />
      </Head>
      <Featured />

      {/* {admin && <AddButton setClose={setClose} />} */}
      <PromoList promoList={promoList} />
      {/* {!close && <Add setClose={setClose} />} */}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/promos");
  return {
    props: {
      promoList: res.data,
      admin,
    },
  };
};
