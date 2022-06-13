import styles from "../styles/Home.module.css";
import HeaderBar from "../components/HeaderBar";

export default function Programming() {
  return (
    <div className={styles.pageTwoContainer}>
      <HeaderBar headerText="Programming " linkTo="/" />

      <main className={styles.p2main}>
        <h1 className={styles.title}></h1>
        <h1></h1>
      </main>
    </div>
  );
}
