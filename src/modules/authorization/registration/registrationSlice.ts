import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registrationData } from './registrationThunk';
import { IState } from '../../../types';
import { errorProcess } from '../errorProcess';
import { Error, ISignUpResponse } from '../../../api/dto/IAutorization';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    isLogin: false,
    isRegistration: false,
    isLoading: false,
    error: false,
    message: '',
    token: '',
    userName: '',
    userAvatar: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registrationData.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      registrationData.fulfilled.type,
      (state, action: PayloadAction<ISignUpResponse>) => {
        state.isLoading = false;
        state.error = false;
        if (action.payload.avatarUrl) {
          state.userAvatar = action.payload.avatarUrl;
        }
        state.isRegistration = true;
        console.log('isRegistration', state.isRegistration);
      }
    );

    builder.addCase(registrationData.rejected.type, (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      const status = action.payload.response.status;
      errorProcess(state, status);
    });
  },
});
// export const {setAuthData} = authorizationSlice.actions;
export default registrationSlice.reducer;
