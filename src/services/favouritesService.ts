import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFavourites} from "../types/IFavourite";


export const FavouritesAPI = createApi({
    reducerPath: "FavouritesAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3002/favourites"}),
    tagTypes: ['Favourites'],
    endpoints: (build) => ({
        getFavourites: build.query<IFavourites[], number>({
            query: (userId: number) => ({
                url: `?userId=${userId}`
            }),
            providesTags: ['Favourites']
        }),
        updateFavourites: build.mutation<IFavourites[], IFavourites>({
            query: (favourites: IFavourites) => ({
                url: `/${favourites.id}`,
                method: "PUT",
                body: favourites
            }),
            invalidatesTags: ['Favourites']
        }),
        createFavourites: build.mutation<IFavourites[], IFavourites>({
            query: (favourites: IFavourites) => ({
                url: `/`,
                method: "POST",
                body: favourites
            })
        })
    })
})
