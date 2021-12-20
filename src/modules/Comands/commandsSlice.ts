import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { teams } from './commandsThunk';
import { errorProcess } from '../authorization/errorProcess';
import { Error } from '../../api/dto/IAutorization';

const teamsSlice = createSlice({
  name: 'commands',
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
    builder.addCase(teams.pending, (state, action) => {
      state.isLoading = true;
      state.error = false;
      debugger;
    });
    builder.addCase(teams.fulfilled.type, (state, action) => {
      state.isLoading = false;
      state.error = false;
    });

    builder.addCase(teams.rejected.type, (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      // const status = action.payload.response.status;

      debugger;

      // errorProcess(state, status);
    });
  },
});
// export const {setAuthData} = authorizationSlice.actions;
export default teamsSlice.reducer;
