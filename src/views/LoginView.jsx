import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../redux/auth/auth-operations";
import s from "./LoginView.module.css";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.form}>
      <h1 className={s.title}>Sign in</h1>
      <form autoComplete="off" onSubmit={handleSubmit} className={s.formLbl}>
        <label className={s.label}>
          <p className={s.text}>Email</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          <p className={s.text}>Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <button type="submit" className={s.btn}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginView;
