import { combineReducers } from '@reduxjs/toolkit';
import setAuthDataReducer from '../../modules/authorization/registration/registrationSlice';
import loginSliceReducer from '../../modules/authorization/login/loginSlice';
import teamsReducer from '../../modules/getComands/commandsSlice';
import saveImage from '../../modules/addCommand/saveImage/saveImageSlice';

export const rootReducer = combineReducers({
  setAuthDataReducer,
  loginSliceReducer,
  teamsReducer,
  saveImage,
});
