import { IData, ISignUpResponse } from '../dto/IAutorization';
import { AxiosResponse } from 'axios';
import { SignInInputs } from '../../types';
import baseRequestAxios from '../baseRequest';

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
