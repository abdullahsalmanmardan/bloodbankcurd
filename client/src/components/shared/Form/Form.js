import React, { useState } from "react";
import InputType from "./InputType";

const Form = ({ formType, submitButton, formTitle, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donor");
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center">{formTitle}</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form className="space-y-6">
          <div className="flex items-center">
            <input
              id="donarRadio"
              type="radio"
              name="role"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
              className="form-radio h-5 w-5 text-green-500 border-gray-300 focus:ring-0"
            />
            <label
              htmlFor="donarRadio"
              className="ml-2 text-base pr-3 font-medium text-gray-800"
            >
              Donar
            </label>
            <input
              id="adminRadio"
              type="radio"
              name="role"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
              className="form-radio h-5 w-5 text-green-500 border-gray-300 focus:ring-0"
            />
            <label
              htmlFor="adminRadio"
              className="ml-2 text-base pr-3 font-medium text-gray-800"
            >
              Admin
            </label>
            <input
              id="hospitalRadio"
              type="radio"
              name="role"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
              className="form-radio h-5 w-5 text-green-500 border-gray-300 focus:ring-0"
            />
            <label
              htmlFor="hospitalRadio"
              className="ml-2 text-base pr-3 font-medium text-gray-800"
            >
              hospital
            </label>

            <input
              id="organizationRadio"
              type="radio"
              name="role"
              value={"organization"}
              onChange={(e) => setRole(e.target.value)}
              className="form-radio h-5 w-5 text-green-500 border-gray-300 focus:ring-0"
            />
            <label
              htmlFor="organizationRadio"
              className="ml-2 text-base pr-3 font-medium text-gray-800"
            >
              Organization
            </label>
          </div>

          {formType === "register" && (
            <>
              {(role === "donar" || role === "admin") && (
                <>
                  <InputType
                    label="Name"
                    inputType="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </>
              )}

              {role === "organization" && (
                <InputType
                  label="Organization Name"
                  inputType="text"
                  name="organizationName"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              )}

              {role === "hospital" && (
                <InputType
                  label="Hospital Name"
                  inputType="text"
                  name="hospitalName"
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              )}
              <InputType
                label="Website"
                inputType="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              <InputType
                label="Address"
                inputType="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              <InputType
                label="Phone"
                inputType="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
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
                  {submitButton}
                </button>
              </div>
            </>
          )}
          {formType === "login" && (
            <>
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
                  {submitButton}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
