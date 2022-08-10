import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IAuth, IAuthResponse, IRegister} from "../types/IAuth";


export const AuthAPI = createApi({
    reducerPath: "AuthAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3002"}),
    endpoints: (build) => ({
        getUser: build.query<IAuthResponse[], IAuth>({
            query: ({email, password}) => ({
                url: `/users`,
                params: {
                    email,
                    password
                }
            }),

        }),
        registerUser: build.mutation<IAuthResponse, IRegister>({
            query: (newUser) => ({
                url: `/users`,
                method: "POST",
                body: newUser

            })
        }),
        checkUser: build.query<IAuthResponse, string>({
            query: (email: string) => ({
                url: `/users`,
                params: {
                    email
                }
            })
        })
    })
})