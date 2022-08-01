import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IScreenState {
    isSmallScreen: boolean
}

const initialState: IScreenState = {
    isSmallScreen: false
}

export const screenSlice = createSlice({
    name: "screen",
    initialState,
    reducers: {
        toggleIsSmallScreen(state, action: PayloadAction<boolean>) {
            state.isSmallScreen = action.payload;
        }
    }
})

export default screenSlice.reducer;