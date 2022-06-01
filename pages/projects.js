import HeaderBar from "../components/HeaderBar";
import styles from "../styles/Home.module.css";
export default function MyFuture() {
  return (
    <>
      <HeaderBar headerText="About Me" linkTo="/" />

      <div>
        <main>
          <div className={styles.aboutme}>
            I am very creative individual, and love to take things and put them
            together&#46; This website is an example of how I was able to take
            an idea&#44; and use a web programming tool like javascript to
            develop a functioning website&#46; As my programming skills evolve
            so will the quality of my website&#46;
          </div>
          <div className={styles.container}></div>
        </main>
      </div>
    </>
  );
}
