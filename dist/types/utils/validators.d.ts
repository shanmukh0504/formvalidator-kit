export declare const validateEmail: (email: string) => boolean;
export declare const validateUsername: (username: string, minLength: number, maxLength: number) => {
    valid: boolean;
    message: string;
};
export declare const validateNumber: (age: number, min: number, max: number) => {
    valid: boolean;
    message: string;
};
export declare const validatePassword: (password: string) => {
    valid: boolean;
    message: string;
};
