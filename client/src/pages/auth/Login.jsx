import React, { useState } from "react";
import axios from "axios";
import Form from "../../components/shared/Form/Form";

const Login = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:3001/login", {
        // email,
        // password,
      });
      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div>
      <Form submitButton="Login" formTitle={"Login Form"} error={error} formType={"login"} />
    </div>
  );
};

export default Login;
