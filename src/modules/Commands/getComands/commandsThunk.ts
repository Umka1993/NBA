import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResultCodesEnum } from '../../../api/dto/IAutorization';
import { getCommands } from '../../../api/requets/getCommands';
import { AxiosError, AxiosResponse } from 'axios';
import { INewCommandResponse, TeamsCollectionResponse } from 'types/reduxTypes';

export const teams = createAsyncThunk('teams/teams', async (_, { rejectWithValue }) => {
  try {
    const resp: AxiosResponse<TeamsCollectionResponse<INewCommandResponse>> =
      await getCommands.getCommands();

    if (resp.status === ResultCodesEnum.Success) {
      console.log('resp', resp);
      return resp.data.data;
    }
  } catch (error) {
    const err = error as AxiosError;

    return rejectWithValue(err);
  }
});
