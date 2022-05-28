import styles from "../styles/Future.module.css";
import Link from "next/link";
import Image from "next/image";
export default function FirstPost() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.iconLink}>
        <Link passHref href="/">
          <Image
            src="/fox.png"
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </Link>
      </div>

      <h1 className={styles.header}>My Future</h1>
      <div style={{ width: "150px" }} />
    </div>
  );
}
