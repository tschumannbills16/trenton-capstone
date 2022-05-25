import styles from "../styles/Background.module.css";

export default function Background({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
