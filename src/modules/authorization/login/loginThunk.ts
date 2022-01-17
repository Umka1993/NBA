import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISignUpResponse, ResultCodesEnum } from '../../../api/dto/IAutorization';
import { SignInInputs } from 'types/formTypes';
import { authApi } from '../../../api/requets/athorization';
import { AxiosError, AxiosResponse } from 'axios';

export const loginData = createAsyncThunk(
  'login/loginData',
  async ({ Login, Password }: SignInInputs, { rejectWithValue }) => {
    try {
      const resp: AxiosResponse<ISignUpResponse> = await authApi.signIn({
        Login,
        Password,
      });

      if (resp.status === ResultCodesEnum.Success) {
        return resp.data;
      }
    } catch (error) {
      const err = error as AxiosError;
      // throw thunkAPI.rejectWithValue;
      return rejectWithValue(err);
      // const responseData = {
      //   statusCode: err.response?.status,
      // };
      //
      // return rejectWithValue(responseData);
    }
  }
);
