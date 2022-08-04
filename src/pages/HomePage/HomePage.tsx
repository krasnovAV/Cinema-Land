import React, {FC, memo, useEffect, useState} from 'react';
import {CinemaLandAPI} from "../../services/cinemaLandService";
import "./HomePage.scss"
import {Slider} from "../../components/Slider/Slider";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {FilmCard} from "../../components/FilmCard/FilmCard";
import {searchSlice} from "../../store/searchSlice";
import {IData} from "../../types/IData";


export const HomePage: FC = memo(() => {
    const {isSmallScreen} = useAppSelector(state => state.screenReducer)
    const {searchParams, isSearchByParams, isSearchByName, name} = useAppSelector(state => state.searchReducer)
    const {error, isLoading, data} = CinemaLandAPI.useGetNewFilmsQuery(15);
    const [searchByParams, {data: dataByParams}] = CinemaLandAPI.useLazySearchFilmsQuery();
    const [searchByName, {data: dataByName}] = CinemaLandAPI.useLazySearchFilmsByNameQuery()

    //const [displayedData, setDisplayedData] = useState(data);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(searchSlice.actions.setIsSearchByParams(false));
        dispatch(searchSlice.actions.setIsSearchByName(false));
    }, [])

    useEffect(() => {
        if (isSearchByName) {
            searchByName(name)
        } else if (isSearchByParams) {
            searchByParams(searchParams);
        }
    }, [isSearchByName, name, isSearchByParams, searchParams])


    return (
        <div className="homePage">
            {isLoading && <h1>Загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке...</h1>}

            {!isSmallScreen && <Slider movies={data?.docs}/>}

            {isSearchByName
                ? dataByName?.docs.map(movie => <FilmCard movie={movie} key={movie.id}/>)
                : isSearchByParams
                    ? dataByParams?.docs.map(movie => <FilmCard movie={movie} key={movie.id}/>)
                    : data?.docs.map(movie => <FilmCard movie={movie} key={movie.id}/>)
            }
        </div>
    );
})