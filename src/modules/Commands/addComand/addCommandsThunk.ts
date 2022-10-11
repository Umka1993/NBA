import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResultCodesEnum } from '../../../api/dto/IAutorization';
import { getCommands } from '../../../api/requets/getCommands';
import { AxiosError, AxiosResponse } from 'axios';
import { INewCommandResponse, TeamsCollectionResponse } from 'types/reduxTypes';
import { sendCommand } from '../../../api/requets/addCommand';
import { commandsData } from '../../../types/formTypes';

export const addTeam = createAsyncThunk(
  'addCommands/addCommands',
  async (commandsData: commandsData, { rejectWithValue }) => {
    try {
      const resp: AxiosResponse<INewCommandResponse> = await sendCommand.add(commandsData);

      if (resp.status === ResultCodesEnum.Success) {
        return resp.data;
      }
    } catch (error) {
      const err = error as AxiosError;

      return rejectWithValue(err);
    }
  }
);
