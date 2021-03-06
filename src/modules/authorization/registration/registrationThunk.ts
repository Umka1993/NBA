import { createAsyncThunk } from '@reduxjs/toolkit';
import { IData, ResultCodesEnum } from '../../../api/dto/IAutorization';
import { authApi } from '../../../api/requets/athorization';

export const registrationData = createAsyncThunk(
  'registration/registrationData',
  async ({ Login, Password, userName }: IData, { rejectWithValue }) => {
    try {
      const resp = await authApi.signUp({ Login, Password, userName });
      if (resp.status === ResultCodesEnum.Success) {
        localStorage.setItem('SavedToken', resp.data.token);
        return resp.data;
      }
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
