import actionTypes from './actionTypes'

export const useActions = (state, dispatch) => ({
    update: data => {
        dispatch({ type: actionTypes.SET_LOADING });
        dispatch({ type: actionTypes.UPDATE, payload: data });
    },
    create: data => {
        dispatch({type: actionTypes.SET_LOADING});
        dispatch({type: actionTypes.CREATE, payload: data});
    },
    delete: data => {
        dispatch({type: actionTypes.SET_LOADING});
        dispatch({ type: actionTypes.DELETE, payload: data});
    },
    getAll: data => {
        dispatch({type: actionTypes.SET_LOADING});
        dispatch({type: actionTypes.GET, payload:data});
    }
});

//replace redux saga with context and hooks
//https://medium.com/@rossitrile93/how-i-replace-redux-redux-saga-with-react-446b4c84f788