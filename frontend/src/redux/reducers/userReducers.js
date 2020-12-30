import { user } from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case user.USER_LOGIN_REQUEST:
            return { loading: true };
        case user.USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case user.USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case user.USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case user.USER_REGISTER_REQUEST:
            return { loading: true };
        case user.USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case user.USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}