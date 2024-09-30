import React, { useEffect } from "react";
import { useForm } from "../contexts/FormContext";

export type RadioGroupProps = {
  label?: string;
  options?: { value: string; label: string }[];
  className?: string;
  required?: boolean;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  label = "Select Option",
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  className,
  required = false,
}) => {
  const { formData, handleChange, errors, touchedFields, setValidationRules } = useForm();

  useEffect(() => {
    setValidationRules("radio", { options });
  }, [options, setValidationRules]);

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-lg font">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex space-x-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={`${className} flex items-center transition-transform transform hover:scale-105`}
          >
            <input
              type="radio"
              name="radio"
              value={option.value}
              checked={formData.radio === option.value}
              onChange={handleChange}
              className={`form-radio h-4 w-4 text-blue-600 focus:ring-blue-500`}
              required={required}
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
      {touchedFields.radio && errors.radio && (
        <p className="text-red-500 text-sm">{errors.radio}</p>
      )}
    </div>
  );
};

export default RadioGroup;
