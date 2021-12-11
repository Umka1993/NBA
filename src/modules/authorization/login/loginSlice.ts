import { AsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginData } from './loginThunk';
import { errorProcess } from '../errorProcess';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;

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
    builder.addCase(loginData.fulfilled, (state, action) => {
      localStorage.setItem('SavedToken', state.token);
      state.isLoading = false;
      state.error = false;
      state.token = action.payload.token;
      console.log(localStorage);
      state.login = action.meta.arg.Login;
      state.isLogin = true;
    });
    builder.addCase(loginData.rejected, (state, action: RejectedAction) => {
      state.isLoading = false;
      errorProcess(state, action);
    });
  },
});
// export const {setAuthData} = authorizationSlice.actions;
export default loginSlice.reducer;
