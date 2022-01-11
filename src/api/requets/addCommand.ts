import { AxiosResponse } from 'axios';
import baseRequestAxios from '../baseRequest';
import { IDataCommandRequest, INewCommandResponse, teamsCollectionResponse } from '../../types';

export const sendCommand = {
  add(dataCommand: IDataCommandRequest): Promise<AxiosResponse<INewCommandResponse>> {
    return baseRequestAxios.post<INewCommandResponse>('/api/Team/Add', dataCommand);
  },
};
