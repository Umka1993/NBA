import { AxiosResponse } from 'axios';
import baseRequestAxios from '../baseRequest';
import { INewCommandResponse } from 'types/reduxTypes';
import { commandsData } from 'types/formTypes';

export const sendCommand = {
  add(dataCommand: commandsData): Promise<AxiosResponse<INewCommandResponse>> {
    return baseRequestAxios.post<INewCommandResponse>('/api/Team/Add', dataCommand);
  },
};
