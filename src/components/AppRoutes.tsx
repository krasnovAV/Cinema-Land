import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {apiRoutes} from "../constants/routes";
import {HomePage} from "../pages/HomePage/HomePage";
import {LoginPage} from "../pages/LoginPage";
import {FilmPage} from "../pages/FilmPage/FilmPage";
import {RegisteringPage} from "../pages/RegisteringPage";

export const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path={apiRoutes.home} element={<HomePage/>}/>
                <Route path={apiRoutes.login} element={<LoginPage/>}/>
                <Route path={apiRoutes.film + ":filmId"} element={<FilmPage/>}/>
                <Route path={apiRoutes.registering} element={<RegisteringPage/>}/>

                {/* в 6 версии react-router-dom происходит redirect*/}
                <Route path="*" element={<Navigate to="/" replace={true}/>}/>
            </Routes>
        </div>
    );
};

