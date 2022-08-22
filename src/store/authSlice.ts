import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuthResponse} from "../types/IAuth";

interface IAuthState {
    isAuth: boolean,
    id: number | null,
    name: string | null,
    isNewUser:boolean,
}

const initialState: IAuthState = {
    isAuth: false,
    id: null,
    name: null,
    isNewUser:false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<IAuthResponse>) {
            state.isAuth = true
            state.id = action.payload.id
            state.name = action.payload.name
        },
        logout(state) {
            state.isAuth = false
            state.id = null
            state.name = null
        },
        toggleIsNewUser(state, action: PayloadAction<boolean>){
            state.isNewUser = action.payload
        }
    }
})

export default authSlice.reducer;