
/**
 *  interface para la información necesaria a enviar en la request
 *  para crear un usuario
 */
export interface UserRequest {
    name: string
    bio: string
}

/**
 *  interface para la información necesaria a enviar en la request
 *  para crear el profile de un usuario
 */
export interface ProfileRequest {
    bio:string
}
