import { Link } from "react-router";
import Button from "../../Button/Button";
import { Controller } from "react-hook-form";
import styles from "./LoginForm.module.css";
import { useState } from "react";

function LoginForm({ name, control }) {
  const [showPassword, setShowPassword] = useState(false);
  function handleClick() {
    setShowPassword((show) => !show);
  }
  return (
    <form method="POST" className={styles.logInForm}>
    <Controller 
    name={name}
    control={control}
    render={({
      field: { onChange, value},
      fieldState: {error},
      formState,
    }) => (
       <div>
            <input
              onChange={onChange}
              value={value}
              error={!!error}
              helperText = "error?.message"
              name="email"
              placeholder="example123@gmail.com"
            ></input>
          </div>
    )}
    />
    <Controller 
    name={name}
    control={control}
    render={({
      field: { onChange, value},
      fieldState: {error},
      formState,
    }) => (
       <input
              onChange={onChange}
              value={value}
              error={!!error}
              type="password"
              name="password"
              placeholder="Enter password"
            ></input>
    )}
    />
    <Link to="#">
              <p>Forgot password?</p>
            </Link>
          <div className={styles.loginCta}>
            <Button type="formButton">Login</Button>
            <p>
              Don't have an account??<Link to="/register"> Register today</Link>
            </p>
          </div>
    </form>
    // Original form
    
  // <form method="POST" className={styles.logInForm}>
    //   <div>
    //     <input name="email" placeholder="example123@gmail.com"></input>
    //   </div>
    //   <div>
    //     <input type="password" name="password" placeholder="Enter password"></input>
    //     <Link to="#"><p>Forgot password?</p></Link>
    //   </div>
    //   <div className={styles.loginCta}>
    //     <Button type='formButton'>Login</Button>
    //     <p>Don't have an account??<Link to="/register"> Register today</Link></p>
    //   </div>
    // </form>

  );
}

export default LoginForm;