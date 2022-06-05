import { SyntheticEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/hooks";
import { registerUserThunk } from "../../redux/thunks/userThunks";
import { UserRegisterData } from "../../types/types";

import StyledForm from "../styles/StyledForm";

const RegisterForm = (): JSX.Element => {
  const blanckFields: UserRegisterData = {
    name: "",
    username: "",
    password: "",
  };

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<UserRegisterData>(blanckFields);

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(blanckFields);
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(registerUserThunk(formData));
    resetForm();
  };

  return (
    <StyledForm>
      <h2>Welcome</h2>
      <p className="greeting">Hello, please sign up to continue</p>
      <form className="form" noValidate autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          value={formData.name}
          onChange={changeData}
          placeholder="Enter your name"
        />

        <label htmlFor="username"> Username </label>
        <input
          id="username"
          value={formData.username}
          onChange={changeData}
          placeholder="Enter your username"
        />

        <label htmlFor="password"> Password </label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          placeholder="Enter your password"
        />

        <div>
          <button
            className="button"
            type="submit"
            disabled={
              formData.username === "" ||
              formData.password === "" ||
              formData.name === ""
            }
          >
            Sign Up
          </button>
          <p className="change-form">
            Have an account?{" "}
            <NavLink to={"/login"} style={{ textDecoration: "none" }}>
              {" "}
              <span className="change-form__link">Log In</span>
            </NavLink>
          </p>
        </div>
      </form>
    </StyledForm>
  );
};

export default RegisterForm;
