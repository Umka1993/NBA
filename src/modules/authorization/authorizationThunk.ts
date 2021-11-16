import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

export const signAuthData = createAsyncThunk(
    'auth/SignAuthData',
    async (data, thunkAPI) => {
        try {
            const response = await axios({
                method: "post",
                url: "http://dev.trainee.dex-it.ru/api/Auth/SignUp",
                data: data,
            })
            const token = response.data.token
            localStorage.setItem("SavedToken", token)

            return response.data

        } catch (e) {
            return thunkAPI.rejectWithValue('Server Error')
        }

    }
);