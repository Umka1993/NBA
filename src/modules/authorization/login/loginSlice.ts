import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginData } from './loginThunk';
import { errorProcess } from '../errorProcess';
import { Error, ISignUpResponse } from 'api/dto/IAutorization';

const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    isRegistration: false,
    userName: '',
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
    builder.addCase(loginData.fulfilled.type, (state, action: PayloadAction<ISignUpResponse>) => {
      localStorage.setItem('SavedToken', action.payload.token);
      localStorage.setItem('Name', action.payload.name);
      state.isLoading = false;
      state.error = false;
      state.token = action.payload.token;

      // state.userName = action.payload.name;

      console.log(localStorage);
      state.isLogin = true;
    });

    builder.addCase(loginData.rejected.type, (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      const status = action.payload.response.status;
      errorProcess(state, status);
    });
  },
});
// export const {setAuthData} = authorizationSlice.actions;
export default loginSlice.reducer;
