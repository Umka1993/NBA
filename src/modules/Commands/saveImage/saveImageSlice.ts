import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error } from 'api/dto/IAutorization';
import { saveImage } from './saveImageThunk';
import { errorProcess } from '../../authorization/errorProcess';
import { IErrors } from '../../../types/reduxTypes';

const saveImageSlice = createSlice({
  name: 'image',
  initialState: {
    errors: {} as IErrors,
    imageUrl: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveImage.pending, (state) => {
      state.errors.isLoading = true;
      state.errors.error = false;
    });
    builder.addCase(saveImage.fulfilled.type, (state, action: PayloadAction<string>) => {
      state.errors.isLoading = false;
      state.errors.error = false;
      state.imageUrl = action.payload;
    });

    builder.addCase(saveImage.rejected.type, (state, action: PayloadAction<Error>) => {
      state.errors.isLoading = false;
      state.errors.status = action.payload.response.status;

      errorProcess(state.errors);
    });
  },
});
export default saveImageSlice.reducer;
