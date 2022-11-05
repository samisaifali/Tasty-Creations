import { useEffect } from "react";
import styles from "./index.module.css";

const Loading = () => {
  /*
   * To prevent page from scrolling, set overflow: hidden in body element
   */
  useEffect(() => {
    const initialOverflow = window.document.body.style.overflow;

    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = initialOverflow;
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.backdrop} />
      <div className={styles.loadingText}>Loading...</div>
    </div>
  );
};

export default Loading;
