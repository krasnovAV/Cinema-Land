import React, {useEffect} from 'react';
import {CinemaLandAPI} from "../../services/cinemaLandService";
import {useParams} from "react-router-dom";
import "./FilmPage.scss"
import {FilmInfoItem} from "./FilmInfoItem/FilmInfoItem";

export const FilmPage = () => {
    const {filmId} = useParams()
    const [getFilm, {isLoading: areReposLoading, data: film}] = CinemaLandAPI.useLazyGetFilmByIdQuery()

    useEffect(() => {
        filmId && getFilm(+filmId);
    }, [filmId])

    console.log(film)

    return (
        <div className="filmInfo">
            <div style={{display: "flex"}}>
                <div className="filmInfo__logo">
                    <img src={film?.poster.url} alt=""/>
                </div>
                <div className="filmInfo__info">
                    <div className="info__header">
                        <h1>{film?.name}</h1>
                        <div>
                            <h3>КП: <span>{film?.rating.kp}</span></h3>
                            <h3>imdb: <span>{film?.rating.imdb}</span></h3>
                        </div>
                    </div>

                    <h1>О фильме</h1>

                    <FilmInfoItem title={"Год производства"}>{film?.year}</FilmInfoItem>
                    <FilmInfoItem
                        title={"Страна"}>{film?.countries.map(country => country.name).join(", ")}</FilmInfoItem>
                    <FilmInfoItem title={"Жанр"}>{film?.genres.map(genre => genre.name).join(", ")}</FilmInfoItem>
                    <FilmInfoItem title={"Продолжительность"}>{film?.movieLength} мин</FilmInfoItem>
                    <FilmInfoItem
                        title={"Режиссер"}>{film?.persons.filter(person => person.enProfession === "director").map(person => person.name).join(", ")}
                    </FilmInfoItem>
                    <FilmInfoItem
                        title={"Актеры"}>{film?.persons.filter(person => person.enProfession === "actor" && person.name).slice(0, 10).map(person => person.name).join(", ")}
                    </FilmInfoItem>
                </div>
            </div>
            <h3>{film?.description}</h3>

            <div className="filmInfo__player">
                <h1> TODO PLAYER</h1>
            </div>
        </div>
    );
};
