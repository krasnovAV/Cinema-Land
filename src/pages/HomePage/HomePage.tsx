import React, {FC, memo} from 'react';
import {CinemaLandAPI} from "../../services/cinemaLandService";
import "./HomePage.scss"
import {Slider} from "../../components/Slider/Slider";
import {useAppSelector} from "../../hooks/redux";
import {FilmCard} from "../../components/FilmCard/FilmCard";


export const HomePage: FC = memo(() => {
    const {isSmallScreen} = useAppSelector(state => state.screenReducer)
    const {error, isLoading, data} = CinemaLandAPI.useGetNewFilmsQuery(15);

    return (
        <div className="homePage">
            {isLoading && <h1>Загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке...</h1>}

            {!isSmallScreen && <Slider movies={data?.docs}/>}

            {data?.docs.map(movie => <FilmCard movie={movie} key={movie.id}/>)}
        </div>
    );
})