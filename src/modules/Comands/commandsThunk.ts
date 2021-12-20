import { createAsyncThunk } from '@reduxjs/toolkit';

import { ResultCodesEnum } from '../../api/dto/IAutorization';
import { getCommands } from '../../api/requets/getCommands';
import { AxiosError } from 'axios';
import { IParams } from '../../pages/MainPage/components/TeamsComponent/TeamsComponent';

export const teams = createAsyncThunk(
  'teams/teams',
  async (params: IParams, { rejectWithValue }) => {
    debugger;
    try {
      const resp = await getCommands.getCommands(params);
      console.log('resp', resp);

      debugger;
      if (resp.status === ResultCodesEnum.Success) {
        return resp.data;
      }
    } catch (error) {
      debugger;
      const err = error as AxiosError;

      return rejectWithValue(err);
    }
  }
);
