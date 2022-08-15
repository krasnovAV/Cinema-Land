import React, {FC, useEffect} from 'react';
import {MyButton} from "../../components/UI/MyButon/MyButton";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {authSlice} from "../../store/authSlice";
import {useNavigate} from "react-router-dom";
import {apiRoutes} from "../../constants/routes";
import {FavouritesAPI} from "../../services/favouritesService";
import {favouritesSlice} from "../../store/favouritesSlice";

export const UserPage: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {id, isAuth} = useAppSelector(state => state.authReducer)
    const {data, isLoading, error} = FavouritesAPI.useGetFavouritesQuery(id as number)

    !isAuth && navigate(apiRoutes.home, {replace: true});
    data && dispatch(favouritesSlice.actions.setFavourites(data[0]))

    const logout = () => {
        dispatch(authSlice.actions.logout())
        dispatch(favouritesSlice.actions.reset)
        navigate(apiRoutes.home, {replace: true})
    }


    return (
        <div>
            {isLoading && "Загрузка..."}
            {error && "Ошибка загрузки..."}

            UserPage
            <MyButton onClick={logout}>Выйти</MyButton>
        </div>
    );
};

