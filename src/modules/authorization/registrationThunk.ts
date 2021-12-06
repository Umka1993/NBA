import { createAsyncThunk } from '@reduxjs/toolkit';
import { IData } from '../../api/dto/IAutorization';
import { authApi } from '../../api/baseRequest';
import { AxiosError } from 'axios';
import { RejectedAction } from '../../types';

export const registrationData = createAsyncThunk(
  'registration/registrationData',
  async ({ Login, Password, userName }: IData, { rejectWithValue }) => {
    try {
      await authApi.signUp({ Login, Password, userName });
    } catch (err: any) {
      const error: AxiosError<RejectedAction<IData>> = err;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response);
    }
  }
);
