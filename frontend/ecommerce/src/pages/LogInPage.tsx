import styles from "./LogInPage.module.css";

function LogInPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
          Welcome back, please log in to continue
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
