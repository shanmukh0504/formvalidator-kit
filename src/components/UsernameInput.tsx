import React, { useEffect } from "react";
import { useForm } from "../contexts/FormContext";

interface UsernameInputProps {
  minLength?: number;
  maxLength?: number;
  className?: string;
}

const UsernameInput: React.FC<UsernameInputProps> = ({
  minLength = 5,
  maxLength = 15,
  className,
}) => {
  const {
    formData,
    errors,
    touchedFields,
    handleChange,
    handleBlur,
    handleFocus,
    setValidationRules,
  } = useForm();

  useEffect(() => {
    setValidationRules("username", { minLength, maxLength });
  }, [minLength, maxLength, setValidationRules]);

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-lg font-semibold">
        Username <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        className={`${className} block w-full px-4 py-2 text-base border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-transform transform hover:scale-105 hover:border-zinc-800 hover:shadow-lg hover:ring-1 hover:ring-zinc-800 ${
          touchedFields.username && errors.username
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : ""
        }`}
        value={formData.username || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      {touchedFields.username && errors.username && (
        <p className="text-red-500 text-sm">{errors.username}</p>
      )}
    </div>
  );
};

export default UsernameInput;
