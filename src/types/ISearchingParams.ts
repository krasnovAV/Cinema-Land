export interface ISearchingParams {
    name?: string,
    startYear?: number,
    endYear?: number,
    genre?: string,
    type?: string,
    startRating?: number,
    endRating?: number,
    page?: number,
    limit?: number
}

interface IGenre {
    label: string,
    value: string
}