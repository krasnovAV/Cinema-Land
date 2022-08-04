import React, {FC, useState} from 'react';
import "./SearchForm.scss"
import {END_YEAR, genres, getYearsRange, START_YEAR} from "../../constants/search";
import {useAppDispatch} from "../../hooks/redux";
import {searchSlice} from "../../store/searchSlice";
import {ISearchingParams} from "../../types/ISearchingParams";

interface IFormProps {
    setActive: (active: boolean) => void;
}

export const SearchForm: FC<IFormProps> = ({setActive}) => {
    const [name, setName] = useState("");
    const [startYear, setStartYear] = useState(START_YEAR);
    const [endYear, setEndYear] = useState(END_YEAR);
    const [genre, setGenre] = useState(genres[0]);
    const [type, setType] = useState("any");
    const [startRating, setStartRating] = useState(1);
    const [endRating, setEndRating] = useState(10);

    const dispatch = useAppDispatch();

    const canselSearch = () => {
        setName("");
        setStartYear(START_YEAR);
        setEndYear(END_YEAR);
        setGenre(genres[0]);
        setActive(false);
        setType("any");
        setStartRating(1);
        setEndRating(10);
    }

    const handleSubmit = () => {
        if (startYear > endYear) {
            let tmp = startYear;
            setStartYear(endYear);
            setEndYear(tmp);
        }

        let resultValueForm: ISearchingParams = {
            name,
            startYear: +startYear,
            endYear: +endYear,
            genre: [genre],
            type: type === "films" ? 1 : type === "serials" ? 2 : 0,
            startRating: startRating,
            endRating: endRating
        }
        dispatch(searchSlice.actions.searchByParams(resultValueForm));
        canselSearch();
    }


    // todo сделать валидацию полей
    return (
        <div className="searchForm">
            <label>Поиск по параметрам</label>
            <input type="text"
                   placeholder={"Введите название фильма"}
                   value={name}
                   onChange={e => setName(e.target.value)}/>
            <div className="searchForm__years">
                Год с <select name="startYear" id="1"
                              value={startYear}
                              onChange={e => setStartYear(+e.target.value)}>
                {getYearsRange().map(year => <option value={year} key={"start" + year} >{year}</option>)}
            </select>

                по <select name="endYear" id="2"
                           value={endYear}
                           onChange={e => setEndYear(+e.target.value)}>
                {getYearsRange().map(year => <option value={year} key={"end" + year}>{year}</option>)}
            </select>
            </div>

            <div>
                Жанр <select name="genres" id="3" defaultValue={""}
                             value={genre.value}
                             onChange={e => setGenre(genres[genres.findIndex(item => item.value === e.target.value)])}>
                {genres.map((genre) => <option value={genre.value} >{genre.label}</option>)}
            </select>
            </div>

            <div>
                Тип <select name="type" id="4" defaultValue={"any"}
                            value={type}
                            onChange={e => setType(e.target.value)}>
                <option value={"any"}>Любой</option>
                <option value={"films"}>Фильмы</option>
                <option value={"serials"}>Сериалы</option>
            </select>
            </div>

            <div className="searchForm__rating">
                Рейтинг КП с <input type="number" value={startRating} onChange={e => setStartRating(+e.target.value)}/>
                по <input type="number" value={endRating} onChange={e => setEndRating(+e.target.value)}/>
            </div>


            <div className="searchForm__footer">
                <button onClick={canselSearch}>Отмена</button>
                <button onClick={handleSubmit}>Поиск</button>
            </div>
        </div>
    );
};

