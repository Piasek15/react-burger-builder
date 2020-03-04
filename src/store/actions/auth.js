import * as actionTypes from './actionTypes';
import axios from 'axios'


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};


export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
};


export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        error: error
    }
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYpXsG1mUAKlft8BVL8m9DfZu_gbclctg', authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(error));
            })
    }
};