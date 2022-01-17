import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error } from 'api/dto/IAutorization';
import { addCommand } from './addCommandThunk';
import { INewCommandResponse } from 'types/reduxTypes';
import { errorProcess } from '../../authorization/errorProcess';
import { IErrors } from 'types/reduxTypes';

const addCommandSlice = createSlice({
  name: 'addCommands',
  initialState: {
    isLogin: false,
    isRegistration: false,
    errors: {} as IErrors,
    token: '',
    userName: '',
    userAvatar: '',
    imageUrl: '',
    newCommand: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCommand.pending, (state) => {
      state.errors.isLoading = true;
      state.errors.error = false;
    });
    builder.addCase(
      addCommand.fulfilled.type,
      (state, action: PayloadAction<INewCommandResponse>) => {
        state.errors.isLoading = false;
        state.errors.error = false;
        state.newCommand = action.payload;
      }
    );

    builder.addCase(addCommand.rejected.type, (state, action: PayloadAction<Error>) => {
      state.errors.isLoading = false;
      state.errors.status = action.payload.response.status;
      errorProcess(state.errors);
    });
  },
});

export default addCommandSlice.reducer;
