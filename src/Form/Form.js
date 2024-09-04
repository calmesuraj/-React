import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import Field from "../Components/FormDiv/Field";
import CustomButton from "../Components/Buttons/button";
import { useHistory } from "react-router-dom";
import PageTitle from "../Components/PageTitle/PageTitle";
import getMessage from "../Components/Message/message";
import { Link } from "react-router-dom";
const Form = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    try {
      const response = await fetch("/user.json");
      const users = await response.json();

      const isValidUser = users.some(
        (u) => u.username === user && u.password === pass
      );

      if (isValidUser) {
        console.log("User authenticated");
        setError(""); // Clear any previous errors
        history.push("/home"); // Navigate to the home page on successful login
      } else if (
        storedUserData &&
        storedUserData.username === user &&
        storedUserData.password === pass
      ) {
        console.log("User authenticated");
        history.push("/home"); // Navigate to the home page on successful login
      } else {
        setError("Invalid username or password");
        history.push("/error"); // Navigate to the home page on successful login
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Error validating credentials");
    }
  };

  const handleUserName = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPass(e.target.value);
  };

  return (
    <Layout onSubmit={handleSubmit} className="layout">
      <PageTitle title={getMessage("LoginTitle")} />
      <Field
        placeholder="User Name"
        type="text"
        value={user}
        onChange={handleUserName}
      />
      <Field
        placeholder="Password"
        type="password"
        value={pass}
        onChange={handlePassword}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}&nbsp;&nbsp;&nbsp;&nbsp;
      <CustomButton text="Sign On" /> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/registration" className="custom-button">
        Sign Up
      </Link>
      {/* Sign Up link */}
    </Layout>
  );
};

export default Form;
