import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import Field from "../Components/FormDiv/Field";
import CustomButton from "../Components/Buttons/button";
import { useHistory } from "react-router-dom"; // Import useHistory
import getMessage from "../Components/Message/message";
import PageTitle from "../Components/PageTitle/PageTitle";

const SignUpPage = () => {
  const [userNew, setUserNew] = useState("");
  const [passNew, setPassNew] = useState("");
  const history = useHistory(); // Initialize useHistory
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    if (!userNew || !passNew) {
      setErrorUsername(getMessage("ErrorUername")); // Display an error message if fields are empty
      setErrorPassword(getMessage("ErrorPassword")); // Display an error message if fields are empty
      hasError = true;
      return;
    }
    if (hasError) {
      return; // Stop form submission if there are validation errors
    }
    const userData = {
      username: userNew,
      password: passNew,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    history.push("/");
  };

  const handleUserName = (e) => {
    setUserNew(e.target.value);
  };

  const handlePassword = (e) => {
    setPassNew(e.target.value);
  };

  return (
    <Layout onSubmit={handleSubmit}>
      <PageTitle title={getMessage("CreateNewuser")} />
      <Field
        label="User Name"
        type="text"
        value={userNew}
        onChange={handleUserName}
      />
      {errorUsername && <p style={{ color: "red" }}>{errorUsername}</p>}
      <Field
        label="Password"
        type="password"
        value={passNew}
        onChange={handlePassword}
      />
      {errorPassword && <p style={{ color: "red" }}>{errorPassword}</p>}
      <CustomButton text="Create" />
    </Layout>
  );
};

export default SignUpPage;
