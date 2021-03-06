import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_EDIT_SUCCESS
    
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return ({
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    });
};

export const employeeCreate = ({ name, phone, shift }) => {

    const firebase = require("firebase");
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`).
            push({ name, phone, shift }).then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.employeeList();
            });
    }
};

export const employeesFetch = () => {
    const firebase = require("firebase");
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`).
            on('value', snapshot => {
                dispatch({
                    type: EMPLOYEE_FETCH_SUCCESS,
                    payload: snapshot.val()
                })
            });


    };
};


export const employeeEdit = ({ name, phone, shift, uid }) => {
    const firebase = require("firebase");
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`).
            set({ name, phone, shift }).then(() => 
        {
            dispatch({type : EMPLOYEE_EDIT_SUCCESS,})
            Actions.employeeList();
        }
        );


    };
};

