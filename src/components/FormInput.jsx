import React from "react";

const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        name={name}
        type={type}
        value={defaultValue}
        className="input input-bordered"
      />
    </div>
  );
};

export default FormInput;
