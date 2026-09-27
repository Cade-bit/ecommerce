import { Link } from "react-router";
import Button from "../../Button/Navigational/Button";
import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";
import { useEffect, useRef, useState } from "react";
import AxiosInstance from "../../Axios/AxiosInstance";
import { useNavigate } from "react-router";

type LoginFormData = {
  email: string;
  password: string;
}

type LoginFormProps = {
  name: string;
} 

function LoginForm() {
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {register, handleSubmit, formState : { errors } } = useForm<LoginFormData>({
    mode:"onSubmit"});


    // Form logic
  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await AxiosInstance.post("api/user/token/", data);

      const {access, refresh} = res.data;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      
      setMessage("Login successful redirecting to home page...");

      navigate("/");
    } catch (error) {
      if (error.response) {
        setMessage("Invalid username or password.");
      } else {
        setMessage("Network error. Please try again later");
      }
    }
};
// End form logic

  // function handleClick() {
  //   setShowPassword((show) => !show);
  // }

  return (
      <div className={styles.formContainer}>
        <div className={styles.errorMessage}>{message && <p className={styles.message}>{message}</p>}</div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.logInForm}>
            <div>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="example123@gmail.com"
              ></input>
            </div>
            <div>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Enter password"
              ></input>
              <Link to="#">
                <p>Forgot password?</p>
              </Link>
            </div>
            <div className={styles.loginCta}>
              <Button type="formButton">Login</Button>
              <p>
                Don't have an account??
                <Link to="/register" className={styles.registerA}>
                  {" "}
                  <strong>Register</strong>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
  );
}

export default LoginForm;