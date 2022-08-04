export interface ISearchingParams {
    name?: string,
    startYear?: number,
    endYear?: number,
    genre?: IGenre[],
    type?: number,
    startRating: number,
    endRating: number,
}

interface IGenre {
    label: string,
    value: string
}