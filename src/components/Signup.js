import React from "react";
import { Textfield } from "./Textfield";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 chars or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 18 chars or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be min 6 chars")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Must confirm password"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1>Sign Up</h1>
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
