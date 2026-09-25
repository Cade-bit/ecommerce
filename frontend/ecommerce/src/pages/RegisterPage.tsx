import sighnupPhoto from "../assets/signupPhoto.jpg"
import styles from './RegisterPage.module.css'
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";

function RegisterPage() {
  return (
    <div className={styles.registerContainer}>
        <div className={styles.registerIllustration}>
          <img src={sighnupPhoto} alt="signup photo"></img>
        </div>
        <div className={styles.signupContainer}>
          <div className={styles.signupTitle}>
            <h2>Register an account with us</h2>
            <p>Create an account and get weekly updates on new products</p>
          </div>
          <div className={styles.signupForm}>
            <RegisterForm/>
          </div>
        </div>
    </div>
  );
}

export default RegisterPage;
