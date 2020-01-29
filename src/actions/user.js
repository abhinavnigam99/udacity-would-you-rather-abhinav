export const GET_USERS = 'GET_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ADD_USER_QUESTION_ANSWER = 'ADD_USER_QUESTION_ANSWER';

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

export function addUserQuestion(authenticatedUser, qid) {
    return {
        type: ADD_USER_QUESTION,
        authenticatedUser,
        qid
    }
}

export function addUserQuestionAnswer(authenticate, qid, option) {
    return {
        type: ADD_USER_QUESTION_ANSWER,
        authenticate,
        qid,
        option
    }
}