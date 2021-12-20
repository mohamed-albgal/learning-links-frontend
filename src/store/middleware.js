import { API } from 'aws-amplify';
import actionTypes from './actionTypes';


export const applyMiddleware = dispatch => action => {
    switch(action.type){
        case actionTypes.UPDATE:
            return API.put("links", `/links/${linkId}`).then(res => dispatch({
                    type: actionTypes.UPDATE,
                    payload: res.data
                })).catch( err => dispatch({
                    type: actionTypes.UPDATE_FAIL,
                    payload: err.response.data,
                }));
        case actionTypes.CREATE:
            return API.post("links","/link").then(res => dispatch({
                type: actionTypes.CREATE,
                payload: res.data,
            })).catch(err => dispatch({
                type: actionTypes.UPDATE_FAIL,
                payload: err.response.data,
            }));
        case actionTypes.GET:
            return API.get("links", "/links").then(res => dispatch({
                type: actionTypes.GET,
                payload: res.data,
            })).catch( err => dispatch({
                type: actionTypes.GET_FAIL,
                payload: err.response.data,
            }));
        case actionTypes.DELETE:
            return API.delete("links",`links/${linkId}`).then(res => dispatch({
                type: actionTypes.DELETE,
                payload: data
            })).catch(err => dispatch({
                    type: actionTypes.DELETE_FAIL,
                    payload: err.response.data,
            }));
        default: dispatch(action)
    }
}