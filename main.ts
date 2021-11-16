import {DeepMap, Message, MultipleFieldErrors, Ref} from "react-hook-form";


export interface IInputProps {
    disabled?: boolean,
    errors: FieldErrors
    togglePasswordShown?: () => void
    isDisabled?: boolean
    passwordShown?: boolean
    eyeClose?: string
    eyeOpen?: string
    type?: string
    label?: string
    register?: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })
    errorKey?: string
    name?: string
    message?: string

}

export type Inputs = {
    label: string
    newPassword: boolean,
    confirmPassword: boolean

};
export type FieldError = {
    type: string;
    ref?: Ref;
    types?: MultipleFieldErrors;
    message?: Message;
};

type FieldErrors<
    TFieldValues extends FieldValues = FieldValues
    > = DeepMap<TFieldValues, FieldError>;

type FieldValues = Record<string, any>;



