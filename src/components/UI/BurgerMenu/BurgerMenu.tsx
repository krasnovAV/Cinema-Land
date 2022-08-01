import React, {FC} from 'react';
import "./BurgerMenu.scss"
import {FiMenu, FiX} from "react-icons/fi";


interface IBurgerProps {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void
}

const BurgerMenu: FC<IBurgerProps> = ({isActive, setIsActive}) => {

    const toggleIsActive = () => {
        setIsActive(!isActive);
    }

    return (
        <button className="burger" onClick={toggleIsActive}>
            {isActive ? <FiX size={45}/> : <FiMenu size={45}/>}
        </button>
    );
};

export default BurgerMenu;