import React, {FC} from 'react';
import {MyButton} from "../../components/UI/MyButon/MyButton";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {authSlice} from "../../store/authSlice";
import {useNavigate} from "react-router-dom";
import {apiRoutes} from "../../constants/routes";
import {FavouritesAPI} from "../../services/favouritesService";
import {favouritesSlice} from "../../store/favouritesSlice";
import {FavouritesItem} from "../../components/FavouritesItem/FavouritesItem";
import "./UserPage.scss"

export const UserPage: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {id, isAuth, isNewUser} = useAppSelector(state => state.authReducer);
    const {favourites} = useAppSelector(state => state.favouritesReducer)
    const [createFavourites, {}] = FavouritesAPI.useCreateFavouritesMutation();
    const [updateFavourites, {}] = FavouritesAPI.useUpdateFavouritesMutation();

    !isAuth && navigate(apiRoutes.home, {replace: true});

    const removeFromFavourite = (filmId: number) => {
        dispatch(favouritesSlice.actions.removeFromFavourites(filmId))
        updateFavourites({id, userId: id, favourites: favourites.filter(item => item.Id != +filmId!)})
    }

    if (isNewUser) {
        createFavourites({id, userId: id, favourites: []});
        dispatch(authSlice.actions.toggleIsNewUser(false))
    }

    const logout = () => {
        dispatch(authSlice.actions.logout());
        dispatch(favouritesSlice.actions.reset);
        navigate(apiRoutes.home, {replace: true});
    }

    return (
        <div className="userPage">
            <MyButton onClick={logout}>Выйти</MyButton>
            {favourites
                ? favourites.map(item => <FavouritesItem item={item}
                                                         removeFromFavourites={removeFromFavourite}/>)
                : <h1>В избранном ничего нет</h1>}
        </div>
    );
};

