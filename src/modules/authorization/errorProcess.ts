import { IState } from '../../types';
import { AnyAction } from '@reduxjs/toolkit';
import { ResultCodesEnum } from '../../api/dto/IAutorization';

export const errorProcess = (state: IState, action: AnyAction): void => {
  const status = action.payload.status;
  if (status === ResultCodesEnum.DuplicateData) {
    state.error = true;
    state.message = 'A user with such data already exists.';
  } else if (ResultCodesEnum.ServerError) {
    state.error = true;
    state.message = 'Sorry, server error';
  } else {
    state.error = true;
    state.message = 'Oops...:-)';
  }
};
