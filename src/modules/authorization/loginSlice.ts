import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { loginData } from './loginThunk';
import { IState } from '../../types';
import { errorProcess } from './errorProcess';

const loginSlice = createSlice({
  name: 'auth',
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
    builder.addCase(loginData.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(loginData.fulfilled, (state, action: AnyAction) => {
      state.isLoading = false;
      state.error = false;
      state.token = action.payload;
      localStorage.setItem('SavedToken', state.token);
      console.log(localStorage);
      state.isLogin = true;
    });
    builder.addCase(loginData.rejected, (state: IState, action: AnyAction) => {
      state.isLoading = false;
      debugger;
      errorProcess(state, action);
    });
  },
});
// export const {setAuthData} = authorizationSlice.actions;
export default loginSlice.reducer;
