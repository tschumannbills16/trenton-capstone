import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Background from "./components/Background";

export default function Home() {
  return (
    <Background>
      <div className={styles.container}>
        <Head>
          <title>Trenton&apos;s Capstone</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="">Trenton&apos;s Capstone</a>
          </h1>

          <div className={styles.grid}></div>
        </main>
      </div>
    </Background>
  );
}
