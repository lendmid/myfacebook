export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    //will be more properties
    userId: number
    fullName: string
    status: string
    photos: PhotosType
} | null

export type PhotosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
}
