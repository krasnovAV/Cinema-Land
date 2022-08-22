import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {apiRoutes} from "../constants/routes";
import {HomePage} from "../pages/HomePage/HomePage";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {FilmPage} from "../pages/FilmPage/FilmPage";
import {RegisteringPage} from "../pages/RegisteringPage";
import {UserPage} from "../pages/UserPage/UserPage";

export const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path={apiRoutes.home} element={<HomePage/>}/>
                <Route path={apiRoutes.login} element={<LoginPage/>}/>
                <Route path={apiRoutes.film + ":filmId"} element={<FilmPage/>}/>
                <Route path={apiRoutes.user + ":userId" + "/" + apiRoutes.film + ":filmId"} element={<FilmPage/>}/>
                <Route path={apiRoutes.registering} element={<RegisteringPage/>}/>
                <Route path={apiRoutes.user + ":userId"} element={<UserPage/>}/>

                {/* в 6 версии react-router-dom происходит redirect*/}
                <Route path="*" element={<Navigate to="/" replace={true}/>}/>
            </Routes>
        </div>
    );
};

