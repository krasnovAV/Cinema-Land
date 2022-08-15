import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFavourites} from "../types/IFavourite";


export const FavouritesAPI = createApi({
    reducerPath: "FavouritesAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3002/favourites"}),
    endpoints: (build) => ({
        getFavourites: build.query<IFavourites[], number>({
            query: (userId: number) =>({
                url: `?userId=${userId}`
            })
        })
    })
})
