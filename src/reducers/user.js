import { ADD_USER_QUESTION, ADD_USER_QUESTION_ANSWER, GET_USERS } from '../actions/user'

export default function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            };
        case ADD_USER_QUESTION_ANSWER:
            return {
                ...state,
                [action.auth]: {
                    ...state[action.auth],
                    answers: {
                        ...state[action.auth].answers,
                        [action.qid]: action.option
                    }
                }
            };
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.authenticatedUser]: {
                    ...state[action.authenticatedUser],
                    questions: state[action.authenticatedUser].questions.concat([action.qid])
                }
            };
        default:
            return state
    }
}