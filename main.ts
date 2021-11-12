export interface IInputProps {
    disabled?: boolean,
    error: unknown
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