import React, {FC} from 'react';
import "./Dropdown.scss"

interface IDropProps {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
}

export const Dropdown: FC<IDropProps> = ({isActive, setIsActive}) => {
    return (
        <div className={isActive ? "dropdown active" : "dropdown"} onClick={() => setIsActive(false)}>
            <div className={"blur"}/>
            <div className={"dropdown__content"} onClick={e=> e.stopPropagation()}>
                DropDown
            </div>
        </div>
    )
};

