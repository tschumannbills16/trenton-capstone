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
        <div className={styles.twoshape}>
          <h1 className={styles.subject}>
            <Link href="/programming">Programming&#32;&#124;</Link>
          </h1>
          <div>
            <h1 className={styles.subject}>
              <Link href="/myfuture">My&#32;Future&#32;&#124;</Link>
            </h1>
          </div>
        </div>
        <div className={styles.object}>
          <Image
            src="/fox.png"
            alt="Picture of the author"
            width={250}
            height={250}
          />
        </div>

        <h1>Hello</h1>

        <main className={styles.main}>
          <h2>Trenton Schumann</h2>
          <div className={styles.grid}></div>
          <div className={styles.p1grid}>
            <h1>Contact</h1>
            <div className={styles.shape}>
              <form method="post">
                <p>
                  <label htmlFor="name">name&#32;</label>
                  <input type="text" name="name" />
                </p>
                <p>
                  <label htmlFor="email">email&#32;</label>
                  <input type="email" name="email" />
                </p>
                <p>
                  <label htmlFor="message">message&#32;</label>
                  <textarea name="message" />
                </p>
                <p>
                  <button className={styles.button}>Submit</button>
                </p>
              </form>
            </div>
          </div>
        </main>
      </Background>
    </div>
  );
}
