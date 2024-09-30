import React from "react";
export type TextInputProps = {
    label?: string;
    className?: string;
    required?: boolean;
};
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
