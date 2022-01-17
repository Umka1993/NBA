export interface IData {
  Login: string;
  Password: string;
  userName: string;
}

export interface ISignUpResponse extends MetaData {
  avatarUrl: string | null;
  name: string;
  token: string;
}

export interface MetaData {
  meta: {
    arg: {
      Login: '888';
    };
  };
}

export enum ResultCodesEnum {
  Success = 200,
  ServerError = 400,
  DuplicateData = 409,
  Unauthorized = 401,
}

export interface Error {
  response: {
    status: number;
    title: string;
    traceId: string;
    type: string;
  };
}

export enum IErrorMessage {
  OtherError = 'Oops...:-)',
  ServerError = 'Sorry, server error',
  DuplicateData = ' with such data already exists.',
  Unauthorized = 'Incorrect login or password',
}
