import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Programming() {
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
      <div className={styles.textAlign}>
        <h3 className={styles.subheader}>Programming</h3>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Programming is one of things i&apos;ve been most interested in a lot
          lately and it really ties in on graphic design their are many
          languages to programming&#44; I am currently using javascript to build
          this website&#44; 97% of all websites use javascript really fun almost
          every weekend my brother comes up and hes been coding since he was 19
          years old and its place we can connect.
        </h1>
        <h1></h1>
      </main>
    </div>
  );
}
