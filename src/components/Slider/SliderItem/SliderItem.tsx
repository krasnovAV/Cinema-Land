import React, {FC} from 'react';
import {IMovie} from "../../../types/IMovie";
import "./SliderItem.scss"

interface IItem{
    item:IMovie
}

export const SliderItem:FC<IItem> = ({item}) => {
    return (
        <div className="sliderItem">
            <img src={item.poster.previewUrl} alt={item.name} />
        </div>
    );
};

