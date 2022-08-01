import React, {FC, useState} from 'react';
import "./SearchForm.scss"
import {genres, getYearsRange} from "../../constants/search";

interface IFormProps {
    setActive: (active: boolean) => void;
}

export const SearchForm: FC<IFormProps> = ({setActive}) => {
    const [searchString, setSearchString] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endYear, setEndYear] = useState("");
    const [genre, setGenre] = useState("");


    const canselSearch = () => {
        setSearchString("");
        setStartYear("");
        setEndYear("");
        setGenre("");
        setActive(false);
    }

    const handleSubmit = () => {
        let resultValueForm = {
            searchString: searchString,
            startYear: startYear,
            endYear: endYear,
            genre: genre
        }

        console.log(resultValueForm);
        canselSearch();
    }
    return (
        <div className="searchForm">
            <label>Поиск по параметрам</label>
            <input type="text"
                   placeholder={"Введите название фильма"}
                   value={searchString}
                   onChange={e => setSearchString(e.target.value)}/>
            <div className="searchForm__years">
                Год с <select name="startYear" id="1"
                              defaultValue={""}
                              value={startYear}
                              onChange={e => setStartYear(e.target.value)}>
                {getYearsRange().map(year => <option value={year} key={"start" + year}>{year}</option>)}
            </select>

                по <select name="endYear" id="2" defaultValue={""}
                           value={endYear}
                           onChange={e => setEndYear(e.target.value)}>
                {getYearsRange().map(year => <option value={year} key={"end" + year}>{year}</option>)}
            </select>
            </div>

            <div>
                Жанр <select name="genres" id="3" defaultValue={""}
                             value={genre}
                             onChange={e => setGenre(e.target.value)}>
                {genres.map(genre => <option value={genre}>{genre}</option>)}
            </select>
            </div>


            <div className="searchForm__footer">
                <button onClick={canselSearch}>Отмена</button>
                <button onClick={handleSubmit}>Поиск</button>
            </div>
        </div>
    );
};

