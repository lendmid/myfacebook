export interface IAuth {
    isLoading: boolean
    isAuth: boolean
    email: string | null
    userId: string | null
    error: string | null
}

export interface IUser {
    email: string | null
    userId: string | null
}
