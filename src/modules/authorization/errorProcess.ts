import { IState } from '../../types';
import { ResultCodesEnum } from '../../api/dto/IAutorization';

export const errorProcess = (state: IState, status: number): void => {
  if (status === ResultCodesEnum.DuplicateData) {
    state.error = true;
    state.message = ' with such data already exists.';
  } else if (status === ResultCodesEnum.ServerError) {
    state.error = true;
    state.message = 'Sorry, server error';
  } else if (status === ResultCodesEnum.Unauthorized) {
    state.error = true;
    state.message = 'Incorrect login or password';
  } else {
    state.error = true;
    state.message = 'Oops...:-)';
  }
};
