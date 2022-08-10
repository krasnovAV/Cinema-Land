import React, {FC, useEffect, useState} from 'react';
import {AuthAPI} from "../../services/authService";
import "./LoginPage.scss"
import {MyButton} from "../../components/UI/MyButon/MyButton";
import {MyCheckBox} from "../../components/UI/MyCheckBox/MyCheckBox";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {authSlice} from "../../store/authSlice";
import {useNavigate} from "react-router-dom";

export const LoginPage: FC = () => {
    const [login, {data, isLoading, error}] = AuthAPI.useLazyGetUserQuery();
    const [checkUser, {data: checkData}] = AuthAPI.useLazyCheckUserQuery();
    const [registerUser, {data: registerData}] = AuthAPI.useRegisterUserMutation();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isNewUser, setIsNewUser] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    const {isAuth, id} = useAppSelector(state => state.authReducer)


    useEffect(() => {
        isRegister
            ? registerData && dispatch(authSlice.actions.login(registerData))
            : data && dispatch(authSlice.actions.login(data[0]))
    }, [data, registerData])

    isAuth && navigate(`../user/${id}`, {replace: true})

    const clearForm = () => {
        setEmail("");
        setPassword("");
        setName("");
    }

    const loginHandler = () => {
        login({email, password})
        clearForm();
        setIsRegister(false);
    }

    const registerHandler = () => {
        checkUser(email)
        if (checkData) {
            alert("Такой пользователь уже существует")
        } else {
            debugger
            registerUser({name, email, password});
        }
        clearForm();
        setIsRegister(true);
    }

    return (
        <div className="loginPage">
            {isLoading && <h1>Загрузка...</h1>}
            {error && <h1>Ошибка загрузки...</h1>}
            <div className="loginPage__form">
                <input type="text"
                       className={!isNewUser ? "invisible" : ""}
                       disabled={!isNewUser}
                       placeholder={"Name"}
                       value={name}
                       onChange={e => setName(e.target.value)}/>
                <input type="text"
                       placeholder={"Email"}
                       value={email}
                       onChange={e => setEmail(e.target.value)}/>
                <input type="password"
                       placeholder={"Password"}
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="loginPage__footer">
                <MyCheckBox label={"Регистрация"} id={"register"} onClick={() => setIsNewUser(!isNewUser)}/>
                <MyButton onClick={isNewUser ? registerHandler : loginHandler}>
                    {isNewUser ? "Регистрация" : "Войти"}
                </MyButton>
            </div>
        </div>
    );
};

