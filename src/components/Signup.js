import React from "react";
import { Textfield } from "./Textfield";
import { Formik, Form } from "formik";

export const Signup = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
    >
      {(formik) => (
        <div>
          <h1>Sign Up</h1>
          {console.log(formik)}
          <Form>
            <Textfield />
          </Form>
        </div>
      )}
    </Formik>
  );
};
