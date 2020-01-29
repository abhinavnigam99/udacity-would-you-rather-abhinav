import { addUserQuestion, saveUserAnswer, receiveUsers } from '../actions/users'
import { addQuestion, receiveQuestions, saveQuestionAnswer } from '../actions/questions'
import { _saveQuestionAnswer, _saveQuestion, _getUsers, _getQuestions } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([
            _getUsers(),
            _getQuestions(),
        ]).then(([users, questions]) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addUserQuestion(authedUser, question.id))
            })

    }
}

export function handleAnswer(qid, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        const info = {
            authedUser: authedUser,
            qid,
            answer: option
        };
        _saveQuestionAnswer(info)
            .then(() => {
                dispatch(saveQuestionAnswer(authedUser, qid, option));
                dispatch(saveUserAnswer(authedUser, qid, option))
            })
    }
}