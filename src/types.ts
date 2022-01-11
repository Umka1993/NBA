import {
  ControllerRenderProps,
  Message,
  MultipleFieldErrors,
  Noop,
  Path,
  Ref,
  UseFormRegister,
} from 'react-hook-form';

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

export interface IYearFoundation<T> {
  name: T;
  field: ControllerRenderProps<T>;
}

export interface ITeamFormNames {
  teamName: string;
  division: string;
  conference: string;
  yearFoundation: string;
  photoInput: string;
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

export interface IState {
  isLogin: boolean;
  isRegistration: boolean;
  userName: string;
  isLoading: boolean;
  error: boolean;
  message: string;
  token: string;
  imageUrl?: string;

  // teamsCollection: teamsCollectionResponse;
}

export interface teamsCollectionResponse {
  data: [
    {
      name: 'string';
      foundationYear: 0;
      division: 'string';
      conference: 'string';
      imageUrl: 'string';
      id: 0;
    }
  ];
  count: 0;
  page: 0;
  size: 0;
}

export interface commandsDataForm {
  photoInput: string;
  teamName: string;
  yearFoundation: number;
  division: string;
  conference: string;
}

export interface IDataCommandRequest {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
}

export interface INewCommandResponse extends IDataCommandRequest {
  id: number;
}
