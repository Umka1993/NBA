import {createSlice} from '@reduxjs/toolkit'
import {signAuthData} from "./authorizationThunk";

const authorizationSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        error: false,
        name: '',
        isLoading: false,
    },
    reducers: {
        setAuthData(state) {
            state.isLoading = false
            state.isAuth = true
        }
    },
    extraReducers: {
        [signAuthData.pending.type]: (state) => {
            state.isLoading = true
            state.error = false;
        },
        [signAuthData.fulfilled.type]: (state) => {
            state.isLoading = false
            state.error = false
            state.isAuth = true
            console.log('isAuth',state.isAuth)
        },
        [signAuthData.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    },
});
export const {setAuthData} = authorizationSlice.actions;
export default authorizationSlice.reducer
