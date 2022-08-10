export interface IAuth {
    email: string,
    password: string
}

export interface IRegister extends IAuth {
    name: string;
}

export interface IAuthResponse {
    id: number,
    name: string,
    email: string,
    password: string,
}
