import React, {FC, memo, useEffect, useState} from 'react';
import {CinemaLandAPI} from "../../services/cinemaLandService";
import "./HomePage.scss"
import {Slider} from "../../components/Slider/Slider";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {FilmCard} from "../../components/FilmCard/FilmCard";
import {searchSlice} from "../../store/searchSlice";
import {Pagination} from "../../components/UI/Pagination/Pagination";
import {LIMIT} from "../../constants/api";
import {FavouritesAPI} from "../../services/favouritesService";
import {favouritesSlice} from "../../store/favouritesSlice";


export const HomePage: FC = memo(() => {
    const {isSmallScreen} = useAppSelector(state => state.screenReducer)
    const {searchParams, isSearchByParams, isSearchByName, name} = useAppSelector(state => state.searchReducer)
    const {error, isLoading, data} = CinemaLandAPI.useGetNewFilmsQuery({limit: 15});
    const [searchByParams, {
        data: dataByParams,
        isLoading: isLoadingByParams,
        error: errorByParams
    }] = CinemaLandAPI.useLazySearchFilmsQuery();
    const [searchByName, {
        data: dataByName,
        isLoading: isLoadingByName,
        error: errorByName
    }] = CinemaLandAPI.useLazySearchFilmsByNameQuery();
    const [getNewFilms, {data: newFilms}] = CinemaLandAPI.useLazyGetNewFilmsQuery();
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const {id, isAuth} = useAppSelector(state => state.authReducer)
    const {data: dataFavourites} = FavouritesAPI.useGetFavouritesQuery(id as number);

    useEffect(() => {
        isAuth && dataFavourites && dispatch(favouritesSlice.actions.setFavourites(dataFavourites[0]))
    }, [dataFavourites])

    let pagesCount;
    isSearchByName
        ? pagesCount = dataByName?.pages as number
        : isSearchByParams
            ? pagesCount = dataByParams?.pages as number
            : pagesCount = data?.pages as number

    useEffect(() => {
        dispatch(searchSlice.actions.canselSearch);
    }, [])

    useEffect(() => {
        if (isSearchByName) {
            searchByName({name, page: currentPage})
        } else if (isSearchByParams) {
            searchByParams(searchParams);
        } else {
            getNewFilms({limit: LIMIT, page: currentPage})
        }
    }, [isSearchByName, name, isSearchByParams, searchParams, currentPage])

    return (
        <div className="homePage">
            {(isLoading || isLoadingByParams || isLoadingByName) && <h1>Загрузка...</h1>}
            {(error || errorByParams || errorByName) && <h1>Произошла ошибка при загрузке...</h1>}

            {!isSmallScreen && <Slider movies={data?.docs}/>}

            {isSearchByName
                ? dataByName?.docs.map(movie => <FilmCard movie={movie} key={movie.id}/>)
                : isSearchByParams
                    ? dataByParams?.docs.map(movie => <FilmCard movie={movie} key={movie.id}/>)
                    : currentPage === 1
                        ? data?.docs.slice(0, LIMIT).map(movie => <FilmCard movie={movie} key={movie.id}/>)
                        : newFilms?.docs.map(movie => <FilmCard movie={movie} key={movie.id}/>)
            }

            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={pagesCount}/>
        </div>
    );
})