import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

interface IData {
    acceptAgreement: string
    Login: string
    Password: string
    passwordAgain: string
    userName: string
}


export const signAuthData = createAsyncThunk(
    'auth/SignAuthData',
    async (data:IData, thunkAPI) => {
        console.log(data)
        try {
            const response = await axios({
                method: "post",
                url: "http://dev.trainee.dex-it.ru/api/Auth/SignUp",
                data: {
                    userName: data.userName,
                    login: data.Login,
                    password: data.Password
                },

            }
            )
            const token = response.data.token
            localStorage.setItem("SavedToken", token)
            // debugger
            return response.data

        } catch (e) {
            return thunkAPI.rejectWithValue('Server Error data not sent')
        }

    }
);