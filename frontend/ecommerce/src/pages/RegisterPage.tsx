import { useForm } from "react-hook-form";
import sighnupPhoto from "../assets/signupPhoto.jpg"
import styles from './RegisterPage.module.css'
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";
import AxiosInstance from "../components/Axios/AxiosInstance";
import { useNavigate } from "react-router";

function RegisterPage() {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();

  const submission = (data) => {
    AxiosInstance.post(`register/`, {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
    })
    .then(() => {
        navigate(`/`)
    })
  };
  return (
    <div className={styles.registerContainer}>
        <div className={styles.registerIllustration}>
          <img src={sighnupPhoto} alt="signup photo"></img>
        </div>
        <div className={styles.signupContainer}>
          <div className={styles.signupTitle}>
            <h2>Register an account with us</h2>
            <p>Fill out the form and get weekly updates on new products</p>
          </div>
          <div className={styles.signupForm}>
            <RegisterForm  onSubmit={handleSubmit(submission)}/>
          </div>
        </div>
    </div>
  );
}

export default RegisterPage;
