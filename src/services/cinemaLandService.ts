import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_Key, API_URL} from "../constants/api";
import {IData} from "../types/IData";
import {IMovie} from "../types/IMovie";

export const CinemaLandAPI = createApi({
    reducerPath: "CinemaLandAPI",
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        getNewFilms: build.query<IData, number | null>({
            query: (limit = 10) => ({
                url: `/movie?field=rating.kp&search=1-10&limit=${limit}&field=year&search=2022&field=typeNumber&search=1&sortField=year&sortType=1&token=${API_Key}`,
            })
        }),
        getFilmById: build.query<IMovie, number>({
            query: (id:number) => ({
                url: `/movie?search=${id}&field=id&token=${API_Key}`,
            })
        })
    })
})
