import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const formFields = {
  firstName: "firstName",
  lastName: "lastName",
  email: "email"
}

const submitValidationSchema = yup.object().shape({
  [formFields.firstName]: yup.string().required(),
  [formFields.lastName]: yup.string().required(),
  [formFields.email]: yup.string().email().required(),
});

export default function App() {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(submitValidationSchema)
  });
  
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <h2>useForm with Yup validation example</h2>
      <form id="submitform" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor={formFields.firstName}>First name</label>
          <input
            id={formFields.firstName}
            name={formFields.firstName}
            ref={register}
          />
        </div>
        {errors && errors[formFields.firstName]?.message && (
          <span>{errors[formFields.firstName].message}</span>
        )}
        <div>
          <label htmlFor={formFields.lastName}>Last name</label>
          <input
            id={formFields.lastName}
            name={formFields.lastName}
            ref={register}
          />
        </div>
        {errors && errors[formFields.lastName]?.message && (
          <span>{errors[formFields.lastName].message}</span>
        )}
        <div>
          <label htmlFor={formFields.email}>Email</label>
          <input
            id={formFields.email}
            name={formFields.email}
            ref={register}
          />
        </div>
        {errors && errors[formFields.email]?.message && (
          <span>{errors[formFields.email].message}</span>
        )}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
