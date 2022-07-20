import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { teams } from './commandsThunk';
import { Error } from '../../../api/dto/IAutorization';
import { IErrors, INewCommandResponse } from 'types/reduxTypes';
import { errorProcess } from '../../authorization/errorProcess';

const teamsSlice = createSlice({
  name: 'commands',
  initialState: {
    // isLogin: false,
    // isRegistration: false,
    errors: {} as IErrors,
    teamsCollection: [] as Array<INewCommandResponse>,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(teams.pending, (state) => {
      state.errors.isLoading = true;
      state.errors.error = false;
    });
    builder.addCase(
      teams.fulfilled.type,
      (state, action: PayloadAction<Array<INewCommandResponse>>) => {
        state.errors.isLoading = false;
        state.errors.error = false;
        state.teamsCollection = action.payload;
        console.log(state.teamsCollection);
      }
    );

    builder.addCase(teams.rejected.type, (state, action: PayloadAction<Error>) => {
      state.errors.isLoading = false;
      state.errors.status = action.payload.response.status;

      errorProcess(state.errors);
    });
  },
});
export default teamsSlice.reducer;
