import { combineReducers } from '@reduxjs/toolkit';
import setAuthDataReducer from '../../modules/authorization/registration/registrationSlice';
import loginSliceReducer from '../../modules/authorization/login/loginSlice';
import teamsReducer from '../../modules/Commands/getComands/commandsSlice';
import saveImageReducer from '../../modules/Commands/saveImage/saveImageSlice';
import addCommandReducer from '../../modules/Commands/addComand/addCommandSlice';

export const rootReducer = combineReducers({
  setAuthDataReducer,
  loginSliceReducer,
  teamsReducer,
  saveImageReducer,
  addCommandReducer,
});
