import { combineReducers } from '@reduxjs/toolkit';
import setAuthDataReducer from '../../modules/authorization/registration/registrationSlice';
import loginSliceReducer from '../../modules/authorization/login/loginSlice';

export const rootReducer = combineReducers({
  setAuthDataReducer,
  loginSliceReducer,
});
