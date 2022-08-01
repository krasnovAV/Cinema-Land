import React, {FC, useState} from 'react';
import "./Slider.scss"
import {SliderButton} from "../UI/SliderButton/SliderButton";
import {IMovie} from "../../types/IMovie";
import {SliderItem} from "./SliderItem/SliderItem";

interface ISliderProps {
    movies: IMovie[] | undefined
}

export const Slider: FC<ISliderProps> = ({movies}) => {
    const [startInd, setStartInd] = useState(0);
    const [endInd, setEndInd] = useState(5);
    const pagesCount = Math.floor(movies?.length! / 5) * 5;

    let showingArr = movies?.filter((movie, index, arr) => index >= startInd && index < endInd)

    const showNext = () => {
        setStartInd(prev => prev + 5)
        setEndInd(prev => prev + 5)
    }
    const showPrev = () => {
        setStartInd(prev => prev - 5)
        setEndInd(prev => prev - 5)
    }

    return (
        <div className="slider">
                {startInd > 0 &&
                    <div className="slider__prevBtn">
                        <SliderButton direction={"left"} onClick={showPrev}/>
                    </div>}
                {endInd < pagesCount &&
                    <div className="slider__nextBtn">
                        <SliderButton direction={"right"} onClick={showNext}/>
                    </div>}

            {showingArr && showingArr.map(item => <SliderItem item={item} key={item.id}/>)}
        </div>
    );
};

