import styles from "../styles/Home.module.css";
import Background from "./components/Background";


export default function Bills() {
  return (
    <Background>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
           Leclerc is gonna lose
          </h1>
        </main>
      </div>
    </Background>
  );
}
