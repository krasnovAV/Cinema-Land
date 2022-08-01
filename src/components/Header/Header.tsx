import React, {FC, useState} from 'react';
import {NavBar} from "../NavBar/NavBar";
import "./Header.scss"
import {FiSettings} from "react-icons/fi";
import {Modal} from "../UI/Modal/Modal";
import {SearchForm} from "../SearchForm/SearchForm";

interface IHeaderProps {
}

export const Header: FC<IHeaderProps> = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [activeModal, setActiveModal] = useState(false);

    const handleSubmit = () => {
        console.log(searchValue);
        setSearchValue("");
    }

    return (
        <div className="header" onClick={() => setIsSearch(false)}>
            <div className="header__wrapper">
                <NavBar isSearch={isSearch} setIsSearch={setIsSearch}/>
            </div>
            <div className={isSearch ? "header__search active" : "header__search"}
                 onClick={e => e.stopPropagation()}>

                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                <div className="search__settings" onClick={()=> setActiveModal(true)}>
                    <FiSettings size={27} style={{color: "black"}}/>
                </div>
                <button onClick={handleSubmit}>Поиск</button>
            </div>

            <Modal active={activeModal} setActive={setActiveModal} handleSubmit={handleSubmit}>
                <SearchForm setActive={setActiveModal}/>
            </Modal>
        </div>
    );
};
