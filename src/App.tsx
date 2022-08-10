import React, {useEffect} from 'react';
import './App.scss';
import "./App.scss"
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";


// библиотека для медиазапросов на изменение размера экрана
import {useMediaQuery} from 'react-responsive'
import {screenSlice} from "./store/screenSlice";
import {useAppDispatch} from "./hooks/redux";

function App() {
    let isSmallScreen = useMediaQuery({query: '(max-width: 1024px)'})
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(screenSlice.actions.toggleIsSmallScreen(isSmallScreen))
    }, [isSmallScreen])

    return (
        <div className="app">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
