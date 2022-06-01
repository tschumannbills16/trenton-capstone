import styles from "../styles/HeaderBar.module.css";
import Link from "next/link";
import Image from "next/image";

const Divider = () => (
  <span style={{ paddingRight: "10px", paddingLeft: "10px" }}>|</span>
);

export default function HeaderBar({ headerText, linkTo }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.navLinks}>
        <div className={styles.iconLink}>
          <Link passHref href={linkTo}>
            <Image
              src="/fox.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className={styles.subLinks}>
          <h1 className={styles.subject}>
            <Link href="/programming">Programming</Link>
          </h1>
          <h1 className={styles.subject}>
            <Divider />
            <Link href="/myfuture">Future</Link>
          </h1>
          <h1 className={styles.subject}>
            <Divider />
            <Link href="/projects">Learn More About Me</Link>
          </h1>
        </div>
      </div>
      <h1 className={styles.header}>{headerText}</h1>
      <div style={{ width: "300px" }} />
    </div>
  );
}
