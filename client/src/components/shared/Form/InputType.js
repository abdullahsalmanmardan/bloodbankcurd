import React from "react";

const InputType = ({ inputType, label, name, value, onChange, className }) => {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          type={inputType}
          value={value}
          name={name}
          onChange={onChange}
          className={className}
          required
        />
      </div>
    </>
  );
};

export default InputType;
