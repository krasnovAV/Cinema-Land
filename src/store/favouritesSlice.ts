import {IFavourites, IFavouritesItem} from "../types/IFavourite";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IFavoritesState extends IFavourites {
}

const initialState: IFavoritesState = {
    userId: null,
    favourites: [],
}

export const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        setFavourites(state, action: PayloadAction<IFavourites>) {
            state.userId = action.payload.userId;
            state.favourites = action.payload.favourites;

        },
        reset(state) {
            state.userId = null;
            state.favourites = [];
        },
        addToFavourites(state, action: PayloadAction<IFavouritesItem>) {
            state.favourites.push(action.payload)
        },
        removeFromFavourites(state, action: PayloadAction<IFavouritesItem>) {
            state.favourites = state.favourites.filter(fav => fav.Id !== action.payload.Id)
        }
    }
})

export default favouritesSlice.reducer