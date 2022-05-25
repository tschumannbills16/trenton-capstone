import Background from "../components/Background";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Trenton&apos;s Capstone</title>
        <link rel="icon" href="/fox.png" />
      </Head>
      <Background>
        <div className={styles.object}>
          <Image
            src="/fox.png"
            alt="Picture of the author"
            width={250}
            height={250}
          />
        </div>
        <main className={styles.main}>
          }}
          <h1 className={styles.subject}>
            <Link href="/programming">Trenton Schumann</Link>
          </h1>
          <h2>Little schu</h2>
          <div className={styles.grid}></div>
        </main>
      </Background>
    </div>
  );
}
