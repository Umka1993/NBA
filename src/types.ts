import { Message, MultipleFieldErrors, Path, Ref, UseFormRegister } from 'react-hook-form';

export interface IInputProps<T, L = void> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label: Path<L>;
  value?: string;
}

export interface FormNames extends SignInInputs {
  userName: string;
  passwordAgain: string;
  acceptAgreement: string;
}

export interface LabelNames extends SignInInputs {
  Name: string;
  'Enter your password again': string;
  'I accept the agreement': string;
}

export interface SignInInputs {
  Login: string;
  Password: string;
}

export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};

export interface IState {
  isLogin: boolean;
  isRegistration: boolean;
  login: string;
  isLoading: boolean;
  error: boolean;
  message: string;
  token: string;
}
