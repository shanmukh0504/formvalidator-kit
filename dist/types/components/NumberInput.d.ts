import React from "react";
export type NumberInputProps = {
    label?: string;
    min?: number;
    max?: number;
    className?: string;
    required?: boolean;
};
declare const NumberInput: React.FC<NumberInputProps>;
export default NumberInput;
