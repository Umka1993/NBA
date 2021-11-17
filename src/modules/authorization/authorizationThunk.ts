import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface IData {
    acceptAgreement: string
    login: string
    password: string
    passwordAgain: string
    userName: string
}


export const signAuthData = createAsyncThunk(
    'auth/SignAuthData',
    async (data:IData, thunkAPI) => {
        try {
            const response = await axios({
                method: "post",
                url: "http://dev.trainee.dex-it.ru/api/Auth/SignUp",
                data: {
                    userName: data.userName,
                    login: data.login,
                    password: data.password
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