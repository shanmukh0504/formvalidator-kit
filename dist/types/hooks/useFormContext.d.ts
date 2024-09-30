export type FormData = {
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
export type ValidationRules = {
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
    setValidationRules: import("lodash").DebouncedFunc<(field: keyof FormData, rules: ValidationRules) => void>;
};
export default useFormContext;
