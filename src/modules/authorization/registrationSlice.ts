import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { registrationData } from './registrationThunk';
import { errorProcess } from './errorProcess';
import { IState } from '../../types';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    isLogin: false,
    isRegistration: false,
    login: '',
    isLoading: false,
    error: false,
    message: '',
    token: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registrationData.pending, (state: IState) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(registrationData.fulfilled, (state: IState, action: AnyAction) => {
      state.isLoading = false;
      state.error = false;
      state.login = action.meta.arg.Login;
      state.token = action.payload;
      localStorage.setItem('SavedToken', state.token);
      state.isRegistration = true;
      console.log('isRegistration', state.isRegistration);
    });
    builder.addCase(registrationData.rejected, (state: IState, action: AnyAction) => {
      state.isLoading = false;
      errorProcess(state, action);
    });
  },
});
// export const {setAuthData} = authorizationSlice.actions;
export default registrationSlice.reducer;
