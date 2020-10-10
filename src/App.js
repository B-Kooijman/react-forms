import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";

export default function App() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <h2>useForm example</h2>
      <form id="submitform" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            name="firstName"
            ref={register({ required: "This field is required" })}
          />
        </div>
        {errors && errors.firstName?.message && (
          <span>{errors.firstName.message}</span>
        )}
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            name="lastName"
            ref={register({ required: "This field is required" })}
          />
        </div>
        {errors && errors.lastName?.message && (
          <span>{errors.lastName.message}</span>
        )}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
