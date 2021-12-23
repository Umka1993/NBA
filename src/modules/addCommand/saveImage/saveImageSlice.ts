import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error } from 'api/dto/IAutorization';
import { errorProcess } from '../../authorization/errorProcess';
import { teamsCollectionResponse } from 'types';
import { saveImage } from './saveImageThunk';

const saveImageSlice = createSlice({
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
    teamsCollection: [
      {
        name: '',
        foundationYear: 0,
        division: '',
        conference: '',
        imageUrl: '',
        id: 0,
      },
    ],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveImage.pending, (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      saveImage.fulfilled.type,
      (state, action: PayloadAction<teamsCollectionResponse>) => {
        state.isLoading = false;
        state.error = false;
        state.teamsCollection = action.payload.data;
      }
    );

    builder.addCase(saveImage.rejected.type, (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      // const status = action.payload.response.status;
      //
      // errorProcess(state, status);
    });
  },
});
// export const {setAuthData} = authorizationSlice.actions;
export default saveImageSlice.reducer;
