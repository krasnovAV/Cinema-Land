import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {CinemaLandAPI} from "../services/cinemaLandService";
import screenReducer from "./screenSlice"
import searchReducer from "./searchSlice"
import {AuthAPI} from "../services/authService";
import authReducer from "./authSlice"

const rootReducer = combineReducers({
    [CinemaLandAPI.reducerPath]: CinemaLandAPI.reducer,
    screenReducer,
    searchReducer,
    authReducer,
    [AuthAPI.reducerPath]: AuthAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(CinemaLandAPI.middleware, AuthAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']