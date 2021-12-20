import baseRequestAxios from '../baseRequest';
import { IParams } from '../../pages/MainPage/components/TeamsComponent/TeamsComponent';
import { AxiosResponse } from 'axios';
import { teamsCollectionResponse } from '../../types';

export const getCommands = {
  getCommands(params: IParams): Promise<AxiosResponse<teamsCollectionResponse>> {
    debugger;
    // axiosHeadersUpdater();
    return baseRequestAxios.get<teamsCollectionResponse>('/api/Team/GetTeams', {
      params,
    });
  },
};
