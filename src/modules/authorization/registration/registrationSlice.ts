import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registrationData } from './registrationThunk';
import { IErrors } from 'types/reduxTypes';
import { errorProcess } from '../errorProcess';
import { Error, ISignUpResponse } from '../../../api/dto/IAutorization';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    isLogin: false,
    isRegistration: false,
    errors: {} as IErrors,
    token: '',
    userName: '',
    userAvatar: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registrationData.pending, (state) => {
      state.errors.isLoading = true;
      state.errors.error = false;
    });
    builder.addCase(
      registrationData.fulfilled.type,
      (state, action: PayloadAction<ISignUpResponse>) => {
        state.errors.isLoading = false;
        state.errors.error = false;
        if (action.payload.avatarUrl) {
          state.userAvatar = action.payload.avatarUrl;
        }
        state.isRegistration = true;
        console.log('isRegistration', state.isRegistration);
      }
    );

    builder.addCase(registrationData.rejected.type, (state, action: PayloadAction<Error>) => {
      state.errors.isLoading = false;
      console.log(action);
      state.errors.status = action.payload.response.status;
      errorProcess(state.errors);
    });
  },
});
export default registrationSlice.reducer;
