import React, {FC} from 'react';
import {IMovie} from "../../../types/IMovie";
import "./CarouselItem.scss"
import {apiRoutes} from "../../../constants/routes";
import {Link} from "react-router-dom";

interface IItem {
    item: IMovie
}

export const CarouselItem: FC<IItem> = ({item}) => {
    return (
        <Link to={apiRoutes.film + item.id}>
            <div className="sliderItem">
                <img src={item.poster.previewUrl} alt={item.name}/>
            </div>
        </Link>

    );
};

