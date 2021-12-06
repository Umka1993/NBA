import { combineReducers } from '@reduxjs/toolkit';
import setAuthDataReducer from '../../modules/authorization/registrationSlice';
import loginSliceReducer from '../../modules/authorization/loginSlice';

export const rootReducer = combineReducers({
  setAuthDataReducer,
  loginSliceReducer,
});
