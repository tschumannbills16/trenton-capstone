import Background from "../components/Background";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import HeaderBar from "../components/HeaderBar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Trenton Schumann</title>
        <link rel="icon" href="/fox.png" />
      </Head>
      <Background>
        <div className={styles.headercontainer}>
          <HeaderBar headerText="" linkTo="/" />
        </div>

        <main className={styles.main}>
          <h2>Trenton schumann</h2>
          <div className={styles.grid}></div>
          <div className={styles.p1grid}>
            <h1>Contact Me</h1>

            <div className={styles.shape}>
              <label className={styles.inputwrapper}>name&#32;</label>
              <input type="text" name="name" />

              <label className={styles.inputwrapper}>email&#32;</label>
              <input type="email" name="email" />

              <label className={styles.inputwrapper}>message&#32;</label>
              <textarea name="message" />

              <button
                className={styles.button}
                onClick={() =>
                  alert(
                    "this is not ready for use, you can email me at trentonschumann@outlook.com"
                  )
                }
              >
                Submit
              </button>
            </div>
          </div>
        </main>
      </Background>
    </div>
  );
}
