import {ISearchingParams} from "../types/ISearchingParams";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISearchState {
    searchParams: ISearchingParams;
    isSearchByParams: boolean;
    isSearchByName: boolean;
    name: string;
}

const initialState: ISearchState = {
    searchParams: {
        name: "",
        startYear: undefined,
        endYear: undefined,
        genre: undefined,
        type: undefined,
        startRating: 1,
        endRating: 10,
    },

    isSearchByParams: false,
    isSearchByName: false,

    name: ""
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchByParams(state, action: PayloadAction<ISearchingParams>) {
            state.searchParams = action.payload;
            state.isSearchByParams = true;
            state.isSearchByName = false;
        },
        setIsSearchByParams(state, action: PayloadAction<boolean>) {
            state.isSearchByParams = action.payload;
        },
        searchByName(state, action: PayloadAction<string>) {
            state.name = action.payload
            state.isSearchByName = true;
            state.isSearchByParams = false;
        },
        setIsSearchByName(state, action: PayloadAction<boolean>) {
            state.isSearchByName = action.payload;
        },
        canselSearch(state){
            state.isSearchByName = false;
            state.isSearchByParams = false;
        }
    }
})

export default searchSlice.reducer;