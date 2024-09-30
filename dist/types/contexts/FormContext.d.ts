import React, { ReactNode } from 'react';
export declare const FormProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useForm: () => {
    formData: import("../hooks/useFormContext").FormData;
    errors: Record<string, string>;
    touchedFields: Record<string, boolean>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleSubmit: () => void;
    setValidationRules: import("lodash").DebouncedFunc<(field: keyof import("../hooks/useFormContext").FormData, rules: import("../hooks/useFormContext").ValidationRules) => void>;
};
