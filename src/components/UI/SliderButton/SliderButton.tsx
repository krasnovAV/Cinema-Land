import React, {ButtonHTMLAttributes, FC} from 'react';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import "./SliderButton.scss"

interface SliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    direction: "left" | "right"
}

export const SliderButton: FC<SliderButtonProps> = ({children, direction, ...props}) => {
    return (
        <button className="sliderBtn" {...props}>
            {direction === "left" ? <FiChevronLeft size={30}/> : <FiChevronRight size={30}/>}
        </button>
    )
}


