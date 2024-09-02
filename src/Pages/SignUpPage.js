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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        placeholder="Create UserName"
        type="text"
        value={userNew}
        onChange={handleUserName}
      />
      <Field
        placeholder="Create Password"
        type="password"
        value={passNew}
        onChange={handlePassword}
      />
      <CustomButton text="Create" />
    </Layout>
  );
};

export default SignUpPage;
