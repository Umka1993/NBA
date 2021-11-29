import {DeepMap, Message, MultipleFieldErrors, Path, Ref, UseFormRegister, ValidationRule} from "react-hook-form";


export interface IInputProps<T>{
    disabled?: boolean,
    errors?: FieldErrors
    togglePasswordShown?: () => void
    isDisabled?: boolean
    passwordShown?: boolean
    eyeClose?: string
    eyeOpen?: string
    type?: string
    register?: UseFormRegister<T>
    errorKey?: string
    name: Path<T>
    message?: string
    label?: string,
}
export interface FormNames extends SignInInputs {
    userName: string,
    Login: string,
    Password: string,
    passwordAgain: string,
    acceptAgreement: string,
};

// export interface ISignInFormData {
//     label?: string
//     register?: UseFormRegister<FormNames>,
//     errors?: FieldErrors
//     name : Path<FormNames>
//
// }
export interface SignInInputs  {
    Login: string
    Password: string
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



