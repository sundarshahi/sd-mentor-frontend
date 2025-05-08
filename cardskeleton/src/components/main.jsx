import { useEffect, useState } from "react";
import styles from "./skeleton.module.css";
const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <SkeletonElement />;
  }

  return (
    <div style={{justifyContent: "center", display: "flex"}}>
      <div className={styles.card}>
        <div className={styles.title}>
          <b>Skeleton Card</b>
        </div>
        <div className={styles.content}>Content after loading skeleton card.</div>
      </div>
    </div>
  );
};

const SkeletonElement = () => {
  return (
    <div style={{justifyContent: "center", display: "flex"}}>
      <div className={styles.card}>
        <div className={`${styles.title} ${styles.skeleton}`}></div>
        <div className={`${styles.content} ${styles.skeleton}`}></div>
      </div>
    </div>
  );
};

export default Main;
