import baseRequestAxios from '../baseRequest';
import { IParams } from '../../pages/MainPage/components/TeamsComponent/TeamsComponent';
import { AxiosResponse } from 'axios';
import { teamsCollectionResponse } from '../../types';

export const getCommands = {
  getCommands(): Promise<AxiosResponse<teamsCollectionResponse>> {
    return baseRequestAxios.get<teamsCollectionResponse>(
      '/api/Team/GetTeams'
      //   {
      //   params,
      // }
    );
  },
};
