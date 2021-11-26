import {DeepMap, Message, MultipleFieldErrors, Path, Ref, UseFormRegister, ValidationRule} from "react-hook-form";


export interface IInputProps{
    disabled?: boolean,
    errors?: FieldErrors
    togglePasswordShown?: () => void
    isDisabled?: boolean
    passwordShown?: boolean
    eyeClose?: string
    eyeOpen?: string
    type?: string
    register: UseFormRegister<FormNames>
    errorKey?: string
    name: Path<FormNames>
    message?: string
    label?: string,
}
export type FormNames = {
    userName: string,
    Login: string,
    Password: string,
    passwordAgain: string,
    acceptAgreement: string,
};

export interface ISignInFormData {
    label?: string
    register?: UseFormRegister<FormNames>,
    errors?: FieldErrors
    name : Path<FormNames>

}

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
type RegisterOptions = Partial<{
    required: Message | ValidationRule<boolean>;
    min: ValidationRule<number | string>;
    max: ValidationRule<number | string>;
    maxLength: ValidationRule<number | string>;
    minLength: ValidationRule<number | string>;
    pattern: ValidationRule<RegExp>;
    // validate: Validate | Record<string, Validate>;
}>;



