import { applyMiddleware, createStore } from 'redux'
import ThunkMiddleware from 'redux-thunk'

import { verifyAuth } from "./actions/auth"
import rootReducer from './reducers'

export default function configureStore(persistedState) {
    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(ThunkMiddleware)
    );
    
    store.dispatch(verifyAuth());
    return store;
}
   