import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginData } from './loginThunk';
import { errorProcess } from '../errorProcess';
import { Error, ISignUpResponse } from 'api/dto/IAutorization';
import { IErrors } from '../../../types/reduxTypes';

const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    errors: {} as IErrors,
    isLogin: false,
    isRegistration: false,
    userName: '',

    token: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginData.pending, (state) => {
      state.errors.isLoading = true;
      state.errors.error = false;
    });
    builder.addCase(loginData.fulfilled.type, (state, action: PayloadAction<ISignUpResponse>) => {
      localStorage.setItem('SavedToken', action.payload.token);
      localStorage.setItem('Name', action.payload.name);
      state.errors.isLoading = false;
      state.errors.error = false;
      state.token = action.payload.token;
      console.log(localStorage);
      state.isLogin = true;
    });

    builder.addCase(loginData.rejected.type, (state, action: PayloadAction<Error>) => {
      state.errors.isLoading = false;
      state.errors.status = action.payload.response.status;
      errorProcess(state.errors);
    });
  },
});
export default loginSlice.reducer;
