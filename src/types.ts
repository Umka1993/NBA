import { Message, MultipleFieldErrors, Path, Ref, UseFormRegister } from 'react-hook-form';

export interface IInputProps<T, L = void> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label?: Path<L>;
  value?: string;
  // getImage?: (image: string) => void;
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

export interface ITeamFormNames {
  teamName: string;
  Division: string;
  Conference: string;
  yearFoundation: string;
  photoInput: string;
  preview: '';
}

export interface ITeamFormLabels extends ITeamFormNames {
  'Year of foundation': string;
  Name: string;
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

export interface commandImg {
  photoInput: File;
}

export interface saveImgResponse {
  data: string;
}
