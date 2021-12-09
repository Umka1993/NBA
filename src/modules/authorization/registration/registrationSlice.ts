import { AsyncThunk, createSlice } from '@reduxjs/toolkit';
import { registrationData } from './registrationThunk';
import { IState } from '../../../types';
import { errorProcess } from '../errorProcess';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;

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
    builder.addCase(registrationData.fulfilled, (state, action) => {
      localStorage.setItem('SavedToken', state.token);
      state.isLoading = false;
      state.error = false;
      state.login = action.meta.arg.Login;
      state.token = action.payload.token;
      state.isRegistration = true;
      console.log('isRegistration', state.isRegistration);
    });
    builder.addCase(registrationData.rejected, (state, action: RejectedAction) => {
      state.isLoading = false;
      errorProcess(state, action);
    });
  },
});
// export const {setAuthData} = authorizationSlice.actions;
export default registrationSlice.reducer;
