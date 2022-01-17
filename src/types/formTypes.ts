import { Message, MultipleFieldErrors, Noop, Path, Ref, UseFormRegister } from 'react-hook-form';

export interface IInputProps<T, L = void> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label?: Path<L>;
  value?: string;
  onChange?: (event: any[]) => void;
  onBlur?: Noop;
  selected?: string;
}

export interface IInputPhoto extends IInputProps<any> {
  getPicture: (file: File) => void;
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

// export interface IYearFoundation<T> {
//   name: T;
//   field: ControllerRenderProps<T>;
// }

export interface ITeamFormNames extends commandsData {
  preview: '';
  ReactDatepicker: Date;
}

export interface ITeamFormLabels extends ITeamFormNames {
  'Year of foundation': string;
  Name: string;
  Division: string;
  Conference: string;
}

export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};

export interface commandsData {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
}
