import { createAsyncThunk } from '@reduxjs/toolkit';
import { IData } from '../../api/dto/IAutorization';
import { authApi } from '../../api/baseRequest';
import { AxiosError } from 'axios';
import { RejectedAction, SignInInputs } from '../../types';

export const loginData = createAsyncThunk(
  'login/loginData',
  async ({ Login, Password }: SignInInputs, { rejectWithValue }) => {
    try {
      await authApi.signIn({ Login, Password });
    } catch (err: any) {
      const error: AxiosError<RejectedAction<IData>> = err;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response);
    }
  }
);
