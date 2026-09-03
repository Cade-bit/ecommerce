import { Controller, useForm } from "react-hook-form";
import AxiosInstance from "../../Axios/AxiosInstance";
import styles from "./RegisterForm.module.css";
import { Link, useNavigate } from "react-router";
import Button from "../../Button/Navigational/Button";
import SubButton from "../../Button/Submit/SubButton";

type RegistrationFormData = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  repeatPassword: string;
};

function RegisterForm({onSubmit}) {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<RegistrationFormData>({
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      repeatPassword: "",
    },
  });

  const submission = (data: RegistrationFormData) => {
    AxiosInstance.post(`register/`, {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
    }).then(() => {
      navigate("login/");
    });
  };

  return (
    <form onSubmit={handleSubmit(submission)} className={styles.registerForm}>
      <Controller
        name={"email"}
        control={control}
        render={({ field }) => (
          <input {...field} type="email" placeholder="example123@gmail.com" />
        )}
      />
      <Controller
        name={"first_name"}
        control={control}
        render={({ field }) => <input {...field} placeholder="First Name" />}
      />
      <Controller
        name={"last_name"}
        control={control}
        render={({ field }) => <input {...field} placeholder="Last Name" />}
      />
      <Controller
        name={"password"}
        control={control}
        render={({ field }) => (
          <input {...field} type="password" placeholder="Enter password" />
        )}
      />
      <Controller
        name={"repeatPassword"}
        control={control}
        rules={{
          validate: (value, formValues) =>
            value === formValues.password || "Passwords do not match",
        }}
        render={({ field, fieldState }) => (
          <>
            <input {...field} type="password" placeholder="Repeat password" />
            {fieldState.error && <p>{fieldState.error.message}</p>}
          </>
        )}
      />
      <>
        <div className={styles.checkBoxInputContainer}>
          <div className={styles.checkBoxContainer}>
            <input
              name="checkbox"
              type="checkbox"
              className={styles.checkBox}
            ></input>
          </div>
          <div className={styles.supportTxt}>
            <label htmlFor="checkbox" className={styles.inputLabel}>
              I agree to the Terms of service and Privacy policy
            </label>
            <p>
              View the
              <Link to="#">
                <strong>Terms of service</strong>
              </Link>
              and the
              <Link to="#">
                <strong>Privacy policy</strong>
              </Link>
            </p>
          </div>
        </div>
      </>
      <div className={styles.registerCta}>
        <SubButton type="Subsecondary">
          Register
        </SubButton>
        <p>
          Already have an account? <Link to="/login" className={styles.loginA}>
            <strong>Login</strong>
          </Link>
        </p>
      </div>
    </form>
);
}
     {/*<form onSubmit={handleSubmit(submission)} className={styles.registerForm}>
       <div>
         <input
           name={"email"}
           control={control}
           placeholder="example123@gmail.com"
         ></input>
       </div>
       <div>
         <input
         type="text"
         name={"firstName"}
         control={control}
         placeholder="First Name"
         ></input>
       </div>

       <div>
         <input
         type="text"
         name={"lastName"}
         control={control}
         placeholder="Last Name"
         ></input>
       </div>

       <div>
         <input
           type="password"
           name={"password"}
           control={control}
           placeholder="Enter password"
         ></input>
       </div>
       <div>
         <input
           type="password"
           name={"password"}
           control={control}
           placeholder="Repeat password"
         ></input>
         <div className={styles.checkBoxInputContainer}>
             <div className={styles.checkBoxContainer}>
                 <input name="checkbox" type="checkbox" className={styles.checkBox}></input>
             </div>
             <div className={styles.supportTxt}>
                 <label for="checkbox" className={styles.inputLabel}>I agree to the Terms of service and Privacy policy</label>
                 <p>View the <Link to="#"><strong>Terms of service</strong></Link> and the <Link to="#"><strong>Privacy policy</strong></Link></p>
             </div>
         </div>

       </div>
       <div className={styles.registerCta}>
         <Button type="formButton" onClick={handleFormSubmit}>
           Register
         </Button>
         <p>
           Already have an account? <Link to="/login" className={styles.loginA}><strong>Login</strong></Link>
         </p>
       </div>
     </form> */}
  

export default RegisterForm;
