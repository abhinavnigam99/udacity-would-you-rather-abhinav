import { AUTHENTICATE_USER, UNAUTHENTICATE_USER } from '../actions/authenticate'

export default function authenticatedUser(state = null, action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return action.id;
        case UNAUTHENTICATE_USER:
            return null;
        default:
            return state
    }
}