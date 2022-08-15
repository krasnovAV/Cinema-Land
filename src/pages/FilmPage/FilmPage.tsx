import React, {useEffect} from 'react';
import {CinemaLandAPI} from "../../services/cinemaLandService";
import {useParams} from "react-router-dom";
import "./FilmPage.scss"
import {FilmInfoItem} from "./FilmInfoItem/FilmInfoItem";
import {useMediaQuery} from "react-responsive";
import {MyButton} from "../../components/UI/MyButon/MyButton";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {favouritesSlice} from "../../store/favouritesSlice";

export const FilmPage = () => {
    const {filmId} = useParams()
    const [getFilm, {isLoading: isLoadingFilm, data: film}] = CinemaLandAPI.useLazyGetFilmByIdQuery();
    let isSmallScreen = useMediaQuery({query: '(max-width: 700px)'});
    const {isAuth} = useAppSelector(state => state.authReducer);
    const {favourites} = useAppSelector(state => state.favouritesReducer)
    const dispatch = useAppDispatch();

    // todo сделать запросы на изменение при работе с избранным

    useEffect(() => {
        filmId && getFilm(+filmId);
    }, [filmId])

    const addToFavourite = () => {
        dispatch(favouritesSlice.actions.addToFavourites({Id: +filmId!, title: film!.name, year: film!.year,}))
    }

    const removeFromFavourite = () => {
        dispatch(favouritesSlice.actions.removeFromFavourites({Id: +filmId!, title: film!.name, year: film!.year,}))
    }
    return (
        <div className="filmInfo">
            {isLoadingFilm && <h1>Загрузка...</h1>}
            <div style={!isSmallScreen ? {display: "flex"} : {}}>
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

                    <div className="info__header">
                        <h1>О фильме</h1>
                        {isAuth && filmId
                            ? favourites.find(fav => fav.Id === +filmId)
                                ? <MyButton style={{width: "150px"}} onClick={removeFromFavourite}>
                                    Удалить из избранного
                                </MyButton>
                                : <MyButton style={{width: "150px"}} onClick={addToFavourite}>
                                    В избранное
                                </MyButton>
                            : ""}
                    </div>

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
