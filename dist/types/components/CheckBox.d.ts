import React from "react";
export type CheckBoxGroupProps = {
    label?: string;
    options?: {
        value: string;
        label: string;
    }[];
    required?: boolean;
    className?: string;
};
declare const CheckBoxGroup: React.FC<CheckBoxGroupProps>;
export default CheckBoxGroup;
