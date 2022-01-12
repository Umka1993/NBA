import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error } from 'api/dto/IAutorization';
import { saveImage } from './saveImageThunk';

const saveImageSlice = createSlice({
  name: 'image',
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveImage.pending, (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(saveImage.fulfilled.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = false;
      state.imageUrl = action.payload;
    });

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
