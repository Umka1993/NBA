import baseRequestAxios from '../baseRequest';
import { AxiosResponse } from 'axios';
import { INewCommandResponse, TeamsCollectionResponse } from 'types/reduxTypes';

export const getCommands = {
  getCommands(): Promise<AxiosResponse<TeamsCollectionResponse<INewCommandResponse>>> {
    return baseRequestAxios.get<TeamsCollectionResponse<INewCommandResponse>>('/api/Team/GetTeams');
  },
};
