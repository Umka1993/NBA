export interface IData {
  Login: string;
  Password: string;
  userName: string;
}

export interface ISignUpResponse {
  avatarUrl: string | null;
  name: string;
  token: string;
}

export enum ResultCodesEnum {
  Success = 200,
  ServerError = 400,
  DuplicateData = 409,
  Unauthorized = 401,
}
