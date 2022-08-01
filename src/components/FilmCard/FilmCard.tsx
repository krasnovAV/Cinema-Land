import React, {FC} from 'react';
import {IMovie} from "../../types/IMovie";
import "./FilmCard.scss"
import {FiPlay} from "react-icons/fi";
import {Link} from "react-router-dom";
import {apiRoutes} from "../../constants/routes";

interface IFilmCard {
    movie: IMovie
}

export const FilmCard: FC<IFilmCard> = ({movie}) => {
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
                <div className="description__header">
                    <h2>{movie.name}</h2>
                    <h3>
                        Рейтинг КП: <span>{movie.rating.kp}</span> imdb: <span>{movie.rating.imdb}</span>
                    </h3>
                </div>

                <h3>Продолжительность: {movie.movieLength} мин</h3>
                <h3>Год: {movie.year}</h3>
                {movie.genres && <h2>Жанр: {movie.genres.toString()}</h2>}
                {movie.countries && <h2>Страна: {movie.countries.toString()}</h2>}
                <h3>{movie.description}</h3>
            </div>
        </div>
    );
};


// Режиссер
// Оливье Накаш, Эрик Толедано
// Сценарий
// Оливье Накаш, Филипп Поццо ди Борго, Эрик Толедано
// Продюсер
// Николя Дюваль-Адассовски, Лоран Зэйтун, Ян Зеноу, ...
// Оператор
// Матьё Вадпьед
// Композитор
// Людовико Эйнауди
// Художник
// Франсуа Эммануэлли, Матьё Вадпьед, Изабель Паннетье, ...
// Монтаж
// Дориан Ригаль-Ансу
// Бюджет
// €9 500 000
// Сборы в США
// $10 198 820
// Сборы в мире
// + $416 389 690 = $426 588 510
// сборы
// Зрители
// Франция19.4 млн, Германия9.1 млн, Испания2.6 млн, ...
// Сборы в России
// $1 725 813
// Премьера в Росcии
// 26 апреля 2012, «Каскад фильм»
// Премьера в мире
// 23 сентября 2011, ...
// Релиз на DVD
// 28 мая 2012, «Новый Диск»
// Релиз на Blu-ray
// 25 июня 2012, «Новый Диск»
// Возраст
// 16+
// Рейтинг MPAA
// Rлицам до 17 лет обязательно присутствие взрослого
// Время
// 112 мин. / 01:52
