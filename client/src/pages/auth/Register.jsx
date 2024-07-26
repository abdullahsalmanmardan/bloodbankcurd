import React, { useState } from "react";
import Form from "../../components/shared/Form/Form";

const Register = () => {
  const [error, setError] = useState("");
  return (
    <div>
      <Form
        submitButton="Register"
        fromTitle="Register Form"
        error={error}
        formType={"register"}
      />
    </div>
  );
};

export default Register;
