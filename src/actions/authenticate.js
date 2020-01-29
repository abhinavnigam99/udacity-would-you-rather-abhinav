export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const UNAUTHENTICATE_USER = 'UNAUTHENTICATE_USER'

export function authenticateUser(id) {
    return {
        type: AUTHENTICATE_USER,
        id
    }
}

export function unauthenticateUser() {
    return {
        type: UNAUTHENTICATE_USER
    }
}