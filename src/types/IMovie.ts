export interface ExternalId {
    tmdb: number;
    imdb: string;
}

export interface Poster {
    url: string;
    previewUrl: string;
}

export interface Backdrop {
    url: string;
    previewUrl: string;
}

export interface Rating {
    tmdb: number;
    kp: number;
    imdb: number;
}

export interface Votes {
    tmdb: number;
    kp: number;
    imdb: number;
}

export interface Trailer {
    _id: string;
    url: string;
    name: string;
    site: string;
    size: number;
    type: string;
}

export interface Videos {
    trailers: Trailer[];
    teasers: any[];
}

export interface Budget {
    value: number;
    currency: string;
}

export interface World {
    value: number;
    currency: string;
}

export interface Russia {
    value: number;
    currency: string;
}

export interface Usa {
    value: number;
    currency: string;
}

export interface Fees {
    world: World;
    russia: Russia;
    usa: Usa;
}

export interface Distributors {
    distributor: string;
    distributorRelease: string;
}

export interface Premiere {
    country: string;
    world: Date;
    russia: Date;
    bluray: Date;
    dvd: Date;
}

export interface Images {
    postersCount: number;
    backdropsCount: number;
    framesCount: number;
}

export interface ProductionCompany {
    name: string;
    url: string;
    previewUrl: string;
}

export interface SpokenLanguage {
    name: string;
    nameEn: string;
}

export interface Fact {
    value: string;
}

export interface Genre {
    name: string;
}

export interface Country {
    name: string;
}

export interface Person {
    id: number;
    name: string;
    enName: string;
    photo: string;
    enProfession: string;
    description: string;
}

export interface IMovie {
    id: number;
    externalId: ExternalId;
    type: string;
    name: string;
    description: string;
    slogan: string;
    year: number;
    poster: Poster;
    backdrop: Backdrop;
    rating: Rating;
    votes: Votes;
    videos: Videos;
    budget: Budget;
    fees: Fees;
    distributors: Distributors;
    premiere: Premiere;
    images: Images;
    status: string;
    movieLength: number;
    productionCompanies: ProductionCompany[];
    spokenLanguages: SpokenLanguage[];
    facts: Fact[];
    genres: Genre[];
    countries: Country[];
    seasonsInfo: any[];
    persons: Person[];
    lists: any[];
}



