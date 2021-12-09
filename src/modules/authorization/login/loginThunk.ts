import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResultCodesEnum } from '../../../api/dto/IAutorization';
import { SignInInputs } from '../../../types';
import { authApi } from '../../../api/requets.ts/athorization';

export const loginData = createAsyncThunk(
  'login/loginData',
  async ({ Login, Password }: SignInInputs, { rejectWithValue }) => {
    try {
      const resp = await authApi.signIn({
        Login,
        Password,
      });

      if (resp.status === ResultCodesEnum.Success) {
        return resp.data;
      }
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
