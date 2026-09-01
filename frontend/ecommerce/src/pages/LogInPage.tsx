import styles from "./LogInPage.module.css";
import loginIllustration from "../assets/LoginIllustration.png";
import LoginForm from "../components/Forms/LogInForm/LoginForm";

function LogInPage() {
  return (
    <div className={styles.container}>
      <div className={styles.illustration}>
        <img src={loginIllustration} alt="Login illustration"></img>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.title}>
          <h2>Welcome back, please log in to continue</h2>
          <p>Enter your email and password<br></br> to login to your account</p>
        </div>
        <div className={styles.form}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
