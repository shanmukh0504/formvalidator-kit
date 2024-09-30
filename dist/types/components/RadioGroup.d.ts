import React from "react";
export type RadioGroupProps = {
    label?: string;
    options?: {
        value: string;
        label: string;
    }[];
    className?: string;
    required?: boolean;
};
declare const RadioGroup: React.FC<RadioGroupProps>;
export default RadioGroup;
