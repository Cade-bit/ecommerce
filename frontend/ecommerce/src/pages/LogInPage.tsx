import styles from "./LogInPage.module.css";
import loginPhoto from "../assets/loginPhoto.jpg";
import LoginForm from "../components/Forms/LogInForm/LoginForm";

function LogInPage() {
  return (
    <div className={styles.container}>
      <div className={styles.illustration}>
        <img src={loginPhoto} alt="Login photo"></img>
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
