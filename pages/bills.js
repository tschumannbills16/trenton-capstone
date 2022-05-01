import styles from "../styles/Home.module.css";
import Background from "./components/Background";
import Image from 'next/image'


export default function Bills() {
  return (
    <Background>
      <div className={styles.container}>
        <main className={styles.main}>
          <Image src="/hamilton.gif" alt="hamilton" width="300" height="400" style={{ paddingBottom: "20px" }}/>
          <h1 className={styles.title}>
           Leclerc is gonna lose
          </h1>
        </main>
      </div>
    </Background>
  );
}
