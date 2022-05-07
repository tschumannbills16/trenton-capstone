import Background from "../components/Background";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trenton&apos;s Capstone</title>
        <link rel="icon" href="/fox.png" />
      </Head>
      <Background>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <h2>Trenton Schumann</h2>
            <Link href="/bills">
              <a>Things I Like</a>
            </Link>
          </h1>
          <div className={styles.grid}></div>
        </main>
      </Background>
    </div>
  );
}
