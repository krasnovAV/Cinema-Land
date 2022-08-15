import React, {FC} from 'react';
import "./FilmCard.scss"
import {FiPlay} from "react-icons/fi";
import {Link} from "react-router-dom";
import {apiRoutes} from "../../constants/routes";
import {IMovie} from "../../types/IMovie";
import {useMediaQuery} from "react-responsive";

interface IFilmCard {
    movie: IMovie
}

export const FilmCard: FC<IFilmCard> = ({movie}) => {
    let isSmallScreen = useMediaQuery({query: '(max-width: 700px)'})

    return (
        <div className="filmCard">
            <div className="filmCard__logo">
                <Link to={apiRoutes.film + movie.id}>
                    <img src={movie.poster.previewUrl} alt=""/>
                    <div className="logo__btnPlay">
                        <FiPlay size={50}/>
                    </div>
                </Link>
            </div>
            <div className="filmCard__description">
                <h2>{movie.name}</h2>
                <h3>
                    Рейтинг КП: <span>{movie.rating.kp}</span>
                </h3>
                <h3>Продолжительность: {movie.movieLength} мин</h3>
                <h3>Год: {movie.year}</h3>
                {movie.genres && <h2>Жанр: {movie.genres.toString()}</h2>}
                {movie.countries && <h2>Страна: {movie.countries.toString()}</h2>}
                {!isSmallScreen && <h3>{movie.description}</h3>}
            </div>
        </div>
    );
};
