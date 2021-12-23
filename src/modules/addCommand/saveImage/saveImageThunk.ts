import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResultCodesEnum } from '../../../api/dto/IAutorization';
import { commandImg, saveImgResponse } from '../../../types';
import { AxiosError, AxiosResponse } from 'axios';
import { savePicture } from '../../../api/requets/saveImage';

export const saveImage = createAsyncThunk(
  'image/saveImg',
  async ({ photoInput }: commandImg, { rejectWithValue }) => {
    try {
      const resp: AxiosResponse<saveImgResponse> = await savePicture.save({ photoInput });

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
