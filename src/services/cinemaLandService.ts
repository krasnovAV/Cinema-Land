import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_Key, API_URL, LIMIT} from "../constants/api";
import {IData} from "../types/IData";
import {IMovie} from "../types/IMovie";
import {ISearchingParams} from "../types/ISearchingParams";

export const CinemaLandAPI = createApi({
    reducerPath: "CinemaLandAPI",
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        getNewFilms: build.query<IData, number | null>({
            query: (limit = LIMIT) => ({
                url: `/movie?field=rating.kp&search=1-10&limit=${limit}&field=year&search=2022&field=typeNumber&search=1&sortField=year&sortType=1&token=${API_Key}`,
            })
        }),
        getFilmById: build.query<IMovie, number>({
            query: (id: number) => ({
                url: `/movie?search=${id}&field=id&token=${API_Key}`,
            })
        }),
        searchFilms: build.query<IData, ISearchingParams>({
            query: ({name, endYear, startYear, type, endRating, startRating, genre}) => ({
                url: `/movie?field=name&search=${name}&limit=${LIMIT}&field=rating.kp&search=${startRating}-${endRating}&field=year&search=${startYear}-${endYear}&field=typeNumber&search=${type}&field[]=genres.name&search[]=${genre![0].value}&isStrict=false&token=${API_Key}`,
            })
        }),
        searchFilmsByName: build.query<IData, string>({
            query: (name: string) => ({
                url: `/movie?search=${name}&field=name&limit=${LIMIT}&isStrict=false&token=${API_Key}`,
            })
        })
    })
})
