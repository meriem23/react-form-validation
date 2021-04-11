import React from "react";
import useForm from "./useForm";
import validate from "./ValidateInfo";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create your account</h1>
        <div className="form-inputs">
          <label htmlFor="username">Username</label> <br />
          <input
            id="username"
            type="text"
            name="username"
            placeholder="enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email">Email</label> <br />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password">Password</label> <br />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2">Confirm password</label> <br />
          <input
            id="password2"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <br />
        <span className="form-input-login">
          Already have an account ? Login here
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
