import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Bills() {
  return (
    <div className={styles.pageTwoContainer}>
      <Link passHref href="/">
        <button>Home Page</button>
      </Link>
      <div className={styles.header}>
        <Image
          src="/fox.png"
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>About me</h1>
        <h1>
          My favorite thing to do is ski, i grew up in whistler so skiiing
          isn&apos;t new to me
        </h1>
      </main>
    </div>
  );
}
