import React, {FC} from 'react';
import {MyButton} from "../../components/UI/MyButon/MyButton";
import {useAppDispatch} from "../../hooks/redux";
import {authSlice} from "../../store/authSlice";
import {useNavigate} from "react-router-dom";
import {apiRoutes} from "../../constants/routes";

export const UserPage:FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const logout =()=>{
        dispatch(authSlice.actions.logout())
        navigate(apiRoutes.home, {replace: true})
    }


    return (
        <div>
            UserPage
            <MyButton onClick={logout}>Выйти</MyButton>
        </div>
    );
};

