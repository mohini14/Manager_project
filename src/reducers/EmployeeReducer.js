import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_EDIT_SUCCESS
}
    from '../actions/types';


const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    employees : ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_FETCH_SUCCESS:
            return action.payload;
        case EMPLOYEE_EDIT_SUCCESS:
        return INITIAL_STATE;
        default:
            return state;
    }
}