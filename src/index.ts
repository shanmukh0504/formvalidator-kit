// Ensure the types are correctly imported
import "./index.css";
import "./styles/style.css";
import useFormContext, { FormData, ValidationRules } from "./hooks/useFormContext";

export { default as CheckBox } from "./components/CheckBox";
export { default as EmailInput } from "./components/EmailInput";
export { default as FileUpload } from "./components/FileUpload";
export { default as FormValidator } from "./components/FormValidator";
export { default as NumberInput } from "./components/NumberInput";
export { default as PasswordInput } from "./components/PasswordInput";
export { default as RadioGroup } from "./components/RadioGroup";
export { default as ReenterPasswordInput } from "./components/ReenterPasswordInput";
export { default as SelectInput } from "./components/SelectInput";
export { default as SliderInput } from "./components/SliderInput";
export { default as SubmitButton } from "./components/SubmitButton";
export { default as TextInput } from "./components/TextInput";
export { default as UsernameInput } from "./components/UsernameInput";
export { default as useFormContext } from "./hooks/useFormContext";
export { FormProvider, useForm } from "./contexts/FormContext";

// Export the handleSubmit function with proper type definitions
export const handleSubmit = (
  initialValues: FormData,
  validationRules?: Record<keyof FormData, ValidationRules>
) => {
  const { handleSubmit } = useFormContext(initialValues, validationRules);
  return handleSubmit;
};

// Export the necessary types for external use
export type { SubmitButtonProps } from "./components/SubmitButton";
export type { CheckBoxGroupProps } from "./components/CheckBox";
export type { FormData, ValidationRules } from "./hooks/useFormContext";
export type { NumberInputProps } from "./components/NumberInput";
export type { RadioGroupProps } from "./components/RadioGroup";
export type { SelectInputProps } from "./components/SelectInput";
export type { SliderInputProps } from "./components/SliderInput";
export type { TextInputProps } from "./components/TextInput";
