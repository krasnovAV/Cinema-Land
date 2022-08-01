import React, {FC, useState} from 'react';
import './NavBar.scss';
// @ts-ignore
import searchIcon from '../../icons/searchIcon.png'
import {MyButton} from "../UI/MyButon/MyButton";
// @ts-ignore
import userIcon from "../../icons/icons-user.png"
import {Link} from "react-router-dom";
import {apiRoutes} from "../../constants/routes";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";
import {Dropdown} from "../UI/BurgerMenu/DropDown/Dropdown";
import {useAppSelector} from "../../hooks/redux";

interface INavProps {
    isSearch: boolean;
    setIsSearch: (value: boolean) => void;
}

export const NavBar: FC<INavProps> = ({setIsSearch, isSearch}) => {
    const [burgerActive, setBurgerActive] = useState(false)
    const {isSmallScreen} = useAppSelector(state => state.screenReducer)

    const toggleIsSearch = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setIsSearch(!isSearch);
    }

    return (
        <div className="navBar">
            <div className="navbar__content">
                <Link to={apiRoutes.home} className="content__logoLink">
                    <div className="logoLink__label">Cinema-Land online</div>
                </Link>

                <div style={{display: "flex", alignItems: "center"}}>
                    <div className="navBar__icon" onClick={toggleIsSearch}>
                        <img src={searchIcon} className="navBar__icon" alt=""/>
                    </div>

                    {isSmallScreen
                        ? <BurgerMenu isActive={burgerActive} setIsActive={setBurgerActive}/>
                        :
                        <Link to={apiRoutes.login} className="navBar__link">
                            <MyButton>
                                <div><img className="navBar__icon" src={userIcon} alt=""/></div>
                                <div>Войти</div>
                            </MyButton>
                        </Link>
                    }
                </div>
            </div>
            {burgerActive && <Dropdown isActive={burgerActive} setIsActive={setBurgerActive}/>}
        </div>
    );
};

