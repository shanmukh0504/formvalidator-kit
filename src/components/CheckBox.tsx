import React from "react";
import { useForm } from "../contexts/FormContext";

export type CheckBoxGroupProps = {
  label?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
  className?: string;
};

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
  label = "Select Options",
  options = [
    { value: "check1", label: "Check 1" },
    { value: "check2", label: "Check 2" },
    { value: "check3", label: "Check 3" },
  ],
  className,
  required = false,
}) => {
  const { formData, handleChange, errors, touchedFields } = useForm();

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-lg font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center transition-transform transform hover:scale-105"
          >
            <input
              type="checkbox"
              name="checkboxes"
              value={option.value}
              checked={formData.checkboxes?.includes(option.value) || false}
              onChange={handleChange}
              className={`${className} form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500`}
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
      {touchedFields.checkboxes && errors.checkboxes && (
        <p className="text-red-500 text-sm">{errors.checkboxes}</p>
      )}
    </div>
  );
};

export default CheckBoxGroup;
