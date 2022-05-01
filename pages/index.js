import Head from "next/head";
import styles from "../styles/Home.module.css";
import Background from "./components/Background";
import Link from 'next/link'

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
            Welcome to <Link href="/bills"><a>Trenton&apos;s Capstone</a></Link>
          </h1>
          <div className={styles.grid}></div>
        </main>
      </div>
    </Background>
  );
}
