
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import { EMAIL_CHANGED, 
    PASSWORD_CHANGE, 
    LOGIN_USER_SUCCESS,
     LOGIN_USER_FAIL,
    LOGIN_USER } from './types';
import ReduxThunk from 'redux-thunk';

export const emailChanged = (text) => {
    return ({
        type: EMAIL_CHANGED,
        payload: text

    });
};

export const passwordChange = (text) => {
    return ({
        type: PASSWORD_CHANGE,
        payload: text
    });
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({type : LOGIN_USER});


        firebase.auth().signInWithEmailAndPassword(email, password).
            then(user => loginUserSuccess(dispatch, user)).catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password).then(
                    user => loginUserSuccess(dispatch, user)).catch((error) =>
                     loginUserFailed(dispatch))
            });
    };
};

const loginUserFailed = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })
};
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};