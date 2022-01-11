import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error } from 'api/dto/IAutorization';
import { addCommand } from './addCommandThunk';
import { INewCommandResponse } from '../../../types';

const addCommandSlice = createSlice({
  name: 'addCommands',
  initialState: {
    isLogin: false,
    isRegistration: false,
    isLoading: false,
    error: false,
    message: '',
    token: '',
    userName: '',
    userAvatar: '',
    imageUrl: '',
    newCommand: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCommand.pending, (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      addCommand.fulfilled.type,
      (state, action: PayloadAction<INewCommandResponse>) => {
        state.isLoading = false;
        state.error = false;
        state.newCommand = action.payload;
      }
    );

    builder.addCase(addCommand.rejected.type, (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      // const status = action.payload.response.status;
      //
      // errorProcess(state, status);
    });
  },
});
// export const {setAuthData} = authorizationSlice.actions;
export default addCommandSlice.reducer;
