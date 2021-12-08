import { IState } from '../../types';
import { ResultCodesEnum } from '../../api/dto/IAutorization';

export const errorProcess = (
  state: IState,
  action: { payload: { response?: { status: number } } }
): void => {
  const status = action.payload.response.status;
  if (status === ResultCodesEnum.DuplicateData) {
    state.error = true;
    state.message = 'A user with such data already exists.';
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
