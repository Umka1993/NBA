import { createAsyncThunk } from '@reduxjs/toolkit';

import { ResultCodesEnum } from '../../../api/dto/IAutorization';
import { getCommands } from '../../../api/requets/getCommands';
import { AxiosError, AxiosResponse } from 'axios';
import { IParams } from '../../../pages/MainPage/components/TeamsComponent/TeamsComponent';
import { teamsCollectionResponse } from '../../../types';

export const teams = createAsyncThunk(
  'teams/teams',
  async (params: IParams, { rejectWithValue }) => {
    try {
      const resp: AxiosResponse<teamsCollectionResponse> = await getCommands.getCommands(params);

      if (resp.status === ResultCodesEnum.Success) {
        return resp.data;
      }
    } catch (error) {
      const err = error as AxiosError;

      return rejectWithValue(err);
    }
  }
);
