import { register } from "../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import s from "./RegisterView.module.css";

function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.form}>
      <h1 className={s.title}>Registration</h1>

      <form autoComplete="off" onSubmit={handleSubmit} className={s.formLbl}>
        <label className={s.formLbl}>
          <p className={s.text}>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
            className={s.inputLbl}
          />
        </label>

        <label className={s.formLbl}>
          <span className={s.text}>e-mail</span>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
            className={s.inputLbl}
          />
        </label>

        <label className={s.formLbl}>
          <span className={s.text}>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
            className={s.inputLbl}
          />
        </label>

        <button type="submit" className={s.btnInput}>
          Registration
        </button>
      </form>
    </div>
  );
}

export default RegisterView;
