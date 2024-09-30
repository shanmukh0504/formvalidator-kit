import * as lodash from 'lodash';
import React$1, { ReactNode } from 'react';

type FormData = {
    username?: string;
    email?: string;
    password?: string;
    reenterPassword?: string;
    radio?: string;
    checkboxes?: string[];
    age?: number;
    satisfaction?: number;
    comments?: string;
    selectOption?: string;
    files?: FileList | null;
};
type ValidationRules = {
    options?: {
        value: string;
        label: string;
    }[];
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
};
declare const useFormContext: (initialValues?: FormData, initialValidationRules?: Record<keyof FormData, ValidationRules>) => {
    formData: FormData;
    errors: Record<string, string>;
    touchedFields: Record<string, boolean>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleSubmit: () => void;
    setValidationRules: lodash.DebouncedFunc<(field: keyof FormData, rules: ValidationRules) => void>;
};

type CheckBoxGroupProps = {
    label?: string;
    options?: {
        value: string;
        label: string;
    }[];
    required?: boolean;
    className?: string;
};
declare const CheckBoxGroup: React$1.FC<CheckBoxGroupProps>;

declare const EmailInput: React$1.FC;

declare const FileUpload: React$1.FC;

declare const FormValidator: React$1.FC;

type NumberInputProps = {
    label?: string;
    min?: number;
    max?: number;
    className?: string;
    required?: boolean;
};
declare const NumberInput: React$1.FC<NumberInputProps>;

declare const PasswordInput: React$1.FC;

type RadioGroupProps = {
    label?: string;
    options?: {
        value: string;
        label: string;
    }[];
    className?: string;
    required?: boolean;
};
declare const RadioGroup: React$1.FC<RadioGroupProps>;

declare const ReenterPasswordInput: React$1.FC;

type SelectInputProps = {
    label?: string;
    options?: {
        value: string;
        label: string;
    }[];
    className?: string;
    required?: boolean;
};
declare const SelectInput: React$1.FC<SelectInputProps>;

type SliderInputProps = {
    label?: string;
    min?: number;
    max?: number;
    className?: string;
    required?: boolean;
};
declare const SliderInput: React$1.FC<SliderInputProps>;

type SubmitButtonProps = {
    text?: string;
    className?: string;
};
declare const SubmitButton: React$1.FC<SubmitButtonProps>;

type TextInputProps = {
    label?: string;
    className?: string;
    required?: boolean;
};
declare const TextInput: React$1.FC<TextInputProps>;

interface UsernameInputProps {
    minLength?: number;
    maxLength?: number;
    className?: string;
}
declare const UsernameInput: React$1.FC<UsernameInputProps>;

declare const FormProvider: React$1.FC<{
    children: ReactNode;
}>;
declare const useForm: () => {
    formData: FormData;
    errors: Record<string, string>;
    touchedFields: Record<string, boolean>;
    handleChange: (e: React$1.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleBlur: (e: React$1.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleFocus: (e: React$1.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleSubmit: () => void;
    setValidationRules: lodash.DebouncedFunc<(field: keyof FormData, rules: ValidationRules) => void>;
};

declare const handleSubmit: (initialValues: FormData, validationRules?: Record<keyof FormData, ValidationRules>) => () => void;

export { CheckBoxGroup as CheckBox, type CheckBoxGroupProps, EmailInput, FileUpload, type FormData, FormProvider, FormValidator, NumberInput, type NumberInputProps, PasswordInput, RadioGroup, type RadioGroupProps, ReenterPasswordInput, SelectInput, type SelectInputProps, SliderInput, type SliderInputProps, SubmitButton, type SubmitButtonProps, TextInput, type TextInputProps, UsernameInput, type ValidationRules, handleSubmit, useForm, useFormContext };
