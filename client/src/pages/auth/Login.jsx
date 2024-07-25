import React, { useState } from "react";
import axios from "axios";
import InputType from "../../components/shared/Form/InputType";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputType
              label="Email"
              inputType="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />

            <InputType
              label="Password"
              inputType="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
