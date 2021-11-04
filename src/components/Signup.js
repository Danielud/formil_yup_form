import React from "react";
import { Textfield } from "./Textfield";
import { Formik, Form } from "formik";

export const Signup = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
    >
      {(formik) => (
        <div>
          <h1>Sign Up</h1>
          {console.log(formik.values)}
          <Form>
            <Textfield label="First Name" name="firstName" type="text" />
            <Textfield label="Last Name" name="lastName" type="text" />
            <Textfield label="email" name="email" type="email" />
            <Textfield label="password" name="password" type="password" />
            <Textfield
              label="confirm password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3 ml-3" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3  ml-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
