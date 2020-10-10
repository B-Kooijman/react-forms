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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">Firstname</label>
        <input
          id="firstName"
          name="firstName"
          ref={register({ required: "This field is required" })}
        />

        {errors && errors.firstName?.message && (
          <span>{errors.firstName.message}</span>
        )}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
