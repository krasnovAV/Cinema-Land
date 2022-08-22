import React, {FC} from 'react';
import "./FavouritesItem.scss"
import {IFavouritesItem} from "../../types/IFavourite";
import {MyButton} from "../UI/MyButon/MyButton";
import {useNavigate} from "react-router-dom";
import {apiRoutes} from "../../constants/routes";

type propsType = {
    item: IFavouritesItem,
    removeFromFavourites: (id: number) => void
}

export const FavouritesItem: FC<propsType> = ({item, removeFromFavourites}) => {
    const navigate = useNavigate();

    return (
        <div className="favouritesItem">
            <div className="favouritesItem__title">
                <h2 onClick={() => navigate(apiRoutes.film + item.Id)}>{item.title} {item.year}</h2>
            </div>
            <MyButton onClick={() => removeFromFavourites(item.Id)} style={{width: "250px"}}>Удалить из
                избранного</MyButton>
        </div>
    );
};
