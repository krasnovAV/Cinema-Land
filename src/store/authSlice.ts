import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuthResponse} from "../types/IAuth";

interface IAuthState {
    isAuth: boolean,
    id: number | null,
    name: string | null
}

const initialState: IAuthState = {
    isAuth: false,
    id: null,
    name: null
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
        }
    }
})

export default authSlice.reducer;