import axios, { AxiosResponse } from 'axios';
import { IData, ISignUpResponse } from './dto/IAutorization';
import { SignInInputs } from '../types';

export const baseRequestAxios = axios.create({
  baseURL: 'http://dev.trainee.dex-it.ru',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

export const authApi = {
  signUp({ Login, Password, userName }: IData): Promise<AxiosResponse<ISignUpResponse>> {
    return baseRequestAxios.post<ISignUpResponse>('/api/Auth/SignUp', {
      Login,
      Password,
      userName,
    });
  },
  signIn({ Login, Password }: SignInInputs): Promise<AxiosResponse<ISignUpResponse>> {
    return baseRequestAxios.post<ISignUpResponse>('/api/Auth/SignIn', {
      Login,
      Password,
    });
  },
};
