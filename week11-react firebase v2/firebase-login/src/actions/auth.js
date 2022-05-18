import { myFirebase } from '../firebase/firebase'
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILURE = "LOGOUT_FAILURE"

export const VERIFY_REQUEST = "VERIFY_REQUEST"
export const VERIFY_SUCCESS = "VERIFY_SUCCESS"


const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    }
}

const receiveLogin = () => {
    return {
        type: LOGIN_SUCCESS
    }
}

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    }
}

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};


const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    };
};

const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};

const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    };
};

const authInit = getAuth(myFirebase);

export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin)
    signInWithEmailAndPassword(authInit, email, password)
        .then(user => {
            dispatch(receiveLogin(user));
        })
        .catch(() => {
            //Do something with the error if you want!
            dispatch(loginError());
        });
}

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    signOut(authInit)
        .then(() => {
            dispatch(receiveLogout());
        })
        .catch((err) => {
            //Do something with the error if you want!
            console.log('err ', err)
            dispatch(logoutError());
        });
};

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    onAuthStateChanged(authInit, user => {
        if (user !== null) {
            dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
    })
};
