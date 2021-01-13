export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    id: number
    fullName: string
    status: string | null
    photos: string | null
    isOwner: boolean
} | null

export type UserType = {
    id: number
    name: string
    status: string
    photos: string | null
}
