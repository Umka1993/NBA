import { commandsData } from './formTypes';
import { IErrorMessage, ResultCodesEnum } from '../api/dto/IAutorization';

export interface IState {
  isLogin: boolean;
  isRegistration: boolean;
  userName: string;
  isLoading: boolean;
  error: boolean;
  message: string;
  token: string;
  imageUrl?: string;

  // teamsCollection: teamsCollectionResponse;
}

export interface TeamsCollectionResponse<INewCommandResponse> {
  data: INewCommandResponse;
  count: number;
  page: number;
  size: number;
}

// export interface IDataCommandRequest {
//   name: string;
//   foundationYear: number;
//   division: string;
//   conference: string;
//   imageUrl: string;
// }

export interface INewCommandResponse extends commandsData {
  id: number;
}

export interface IErrors {
  isLoading: false | true;
  error: false | true;
  message: IErrorMessage;
  status: ResultCodesEnum;
}
