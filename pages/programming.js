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
        <h3 className={styles.subheader}>Programming&#47;coding</h3>
      </div>
      <main className={styles.p2main}>
        <h1 className={styles.title}>
          Programming is one of things I have been most interested in a lot
          lately&#44; and it really ties in on a lot of graphic design their are
          many languages to programming&#44; I am currently using javascript to
          build this website&#44; Fun Fact&#58; almost 92% of people use
          javascript as their language to build their website&#46; building your
          own website gives you the freedom to do what ever you want&#44; most
          website builders like wix have limits on functionality and freedom you
          can do with the site&#46; The possibilities are endless with coding
          your own website and it&#39;s quite fun to mess around with the
          code&#46; another reason why I like coding is with the code almost
          every weekend my brother comes up and hes been coding since he was 19
          years old and its place we can connect.
        </h1>
        <h1></h1>
      </main>
    </div>
  );
}
