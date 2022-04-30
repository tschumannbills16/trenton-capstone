import styles from "../../styles/Background.module.css";

export default function Background({ children }) {
  return <article className={styles.wrapper}>{children}</article>;
}
