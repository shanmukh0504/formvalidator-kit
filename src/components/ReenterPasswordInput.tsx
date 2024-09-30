import React, { useState } from "react";
import { useForm } from "../contexts/FormContext";
import Eye from "../assets/eye.svg";
import EyeSlash from "../assets/eye-slash.svg";

const ReenterPasswordInput: React.FC = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const {
    formData,
    handleChange,
    handleBlur,
    handleFocus,
    errors,
    touchedFields,
  } = useForm();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-lg font-semibold">
        Re-enter Password <span className="text-red-500">*</span>
      </label>
      <div className="relative flex">
        <input
          type={isPasswordVisible ? "text" : "password"}
          name="reenterPassword"
          placeholder="Re-enter your password"
          className={`relative block w-full px-4 py-2 text-base border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-transform transform hover:scale-105 hover:border-zinc-800 hover:shadow-lg hover:ring-1 hover:ring-zinc-800 ${
            touchedFields.reenterPassword && errors.reenterPassword
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : ""
          }`}
          value={formData.reenterPassword || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          required
        />
        <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-0 top-0 h-full px-3 flex items-center justify-center border-l rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <img
              src={isPasswordVisible ? Eye : EyeSlash}
              alt={isPasswordVisible ? "Hide Password" : "Show Password"}
              width={20}
              height={20}
            />
          </button>
          </div>
      {touchedFields.reenterPassword && errors.reenterPassword && (
        <p className="text-red-500 text-sm">{errors.reenterPassword}</p>
      )}
    </div>
  );
};

export default ReenterPasswordInput;
