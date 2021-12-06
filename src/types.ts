import { Message, MultipleFieldErrors, Path, Ref, UseFormRegister } from 'react-hook-form';

export interface IInputProps<T, L = void> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label: Path<L>;
  value?: string;
}

export interface FormNames extends SignInInputs {
  userName: string;
  Login: string;
  Password: string;
  passwordAgain: string;
  acceptAgreement: string;
}

export interface SignInInputs {
  Login: string;
  Password: string;
}

export interface LabelNames {
  Name: string;
  Login: string;
  Password: string;
  'Enter your password again': string;
  'I accept the agreement': string;
}

export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};

export interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
}

export interface RejectedAction<T> {
  type: string;
  payload: undefined;
  error: SerializedError | any;
  meta: {
    requestId: string;
    arg: T;
    aborted: boolean;
    condition: boolean;
  };
}

export interface IButtonProps {
  text: string;
  isValid: boolean;
  isDirty: boolean;
}

export interface IState {
  isLogin: boolean;
  isRegistration: boolean;
  login: string;
  isLoading: boolean;
  error: boolean;
  message: string;
  token: string;
}
