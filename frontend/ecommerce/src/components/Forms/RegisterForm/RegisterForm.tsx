import AxiosInstance from "../../Axios/AxiosInstance";
import styles from "./RegisterForm.module.css";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SubButton from "../../Button/Submit/SubButton";

type RegistrationFormData = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  repeatPassword: string;
};


function RegisterForm() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegistrationFormData>({
    mode:"onChange"});

    const password = watch("password");

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      const response = await AxiosInstance.post("register/", {
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        password: data.password,
      });
      console.log(response);
      setMessage("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMessage(JSON.stringify(error.response.data));
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
      <div>
        <input type="email" {...register("email", { required: "Email is required" })} placeholder="example123@gmail.com" />
        {errors.email && <p style={{ color: "red" }} className={styles.errorMessage}>{errors.email.message}</p>}
      </div>
      <div>
        <input type="text" {...register("first_name", { required: "First name is required" })} placeholder="First Name" />
        {errors.first_name && <p className={styles.errorMessage}>{errors.first_name.message}</p>}
      </div>
      <div>
        <input type="text" {...register("last_name", { required: "Last name is required" })} placeholder="Last Name" />
        {errors.last_name && <p className={styles.errorMessage}>{errors.last_name.message}</p>}
      </div>
      <div>
        <input type="password" {...register("password", { required: "Password is required" })} placeholder="Enter password" />
        {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
      </div>
      <div>
        <input type="password" {...register("repeatPassword", { required: "Please repeat your password", validate: (value) => value === password || "The passwords do not match" })} placeholder="Repeat password" />
        {errors.repeatPassword && <p className={styles.errorMessage}>{errors.repeatPassword.message}</p>}
      </div>
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
              View the <Link to="#">
                <strong>Terms of service</strong>
              </Link> and the <Link to="#">
                <strong>Privacy policy</strong>
              </Link>
            </p>
          </div>
        </div>
      <div className={styles.registerCta}>
        <SubButton type="secondary">
          Register
        </SubButton>
        <p>
          Already have an account? <Link to="/login" className={styles.loginA}>
            <strong>Login</strong>
          </Link>
        </p>
      </div>
    </form>
    {message && <p className={styles.message}>{message}</p>}
</>
  );
}

    {/* <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
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
              View the <Link to="#">
                <strong>Terms of service</strong>
              </Link> and the <Link to="#">
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
    </form>*/}

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
