import React from "react";
export type SelectInputProps = {
    label?: string;
    options?: {
        value: string;
        label: string;
    }[];
    className?: string;
    required?: boolean;
};
declare const SelectInput: React.FC<SelectInputProps>;
export default SelectInput;
