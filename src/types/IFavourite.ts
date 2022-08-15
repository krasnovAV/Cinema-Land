export interface IFavourites {
    userId: number | null,
    favourites: IFavouritesItem[]
}

export interface IFavouritesItem{
    title: string,
    year: number,
    Id: number
}