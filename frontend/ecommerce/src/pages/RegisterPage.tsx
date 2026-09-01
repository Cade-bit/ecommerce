import { useForm } from "react-hook-form";
import styles from './RegisterPage.module.css'

function RegisterPage() {
  const { handleSubmit, control } = useForm();

  const submission = (data) => {
    AxiosInstance.post(`register/`, {
      email: data.email,
      password: data.password,
    })
    .then(() => {
        navigate(`/`)
    })
  };
  return (
    <div className={styles.regicterContainer}>
        <div className={styles.registerIllustration}></div>
    </div>
  );
}

export default RegisterPage;
