import {createSlice} from '@reduxjs/toolkit'
import {signAuthData} from "./authorizationThunk";

interface IAuthData {
    name: string
    isAuth: boolean
    isLoading: boolean
    error: string
}

const initialState: IAuthData = {
    isAuth: false,
    error: '',
    name: '',
    isLoading: false,
}
console.log(initialState.isAuth)
const authorizationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData(state) {
            state.isLoading = false
            state.isAuth = true
        }
    },
    extraReducers: {
        [signAuthData.pending.type]: (state) => {
            state.isLoading = true
            state.error = '';
        },
        [signAuthData.fulfilled.type]: (state) => {
            state.isLoading = false
            state.error = ''
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
