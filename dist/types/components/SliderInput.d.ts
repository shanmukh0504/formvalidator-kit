import React from "react";
export type SliderInputProps = {
    label?: string;
    min?: number;
    max?: number;
    className?: string;
    required?: boolean;
};
declare const SliderInput: React.FC<SliderInputProps>;
export default SliderInput;
