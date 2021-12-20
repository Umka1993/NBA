import { combineReducers } from '@reduxjs/toolkit';
import setAuthDataReducer from '../../modules/authorization/registration/registrationSlice';
import loginSliceReducer from '../../modules/authorization/login/loginSlice';
import teamsReducer from '../../modules/Comands/commandsSlice';

export const rootReducer = combineReducers({
  setAuthDataReducer,
  loginSliceReducer,
  teamsReducer,
});
