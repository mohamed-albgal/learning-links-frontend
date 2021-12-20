import { API } from 'aws-amplify';
import actionTypes from './actionTypes';


export const applyMiddleware = dispatch => action => {
    debugger
    switch(action.type){
        case actionTypes.UPDATE:
            return API.put("links", `/links/${action.payload.linkId}`, {body: action.payload}).then(res => {
                
                debugger
                dispatch({
                    type: actionTypes.UPDATE,
                    payload: res.data
                })
        } 
                ).catch( err => dispatch({
                    type: actionTypes.UPDATE_FAIL,
                    payload: err.message,
                }));
        case actionTypes.CREATE:
            return API.post("links","/links", { body: action.payload }).then(res => {
                
                debugger
                dispatch({
                type: actionTypes.CREATE,
                payload: res,
            })
        }
            
            ).catch(err => dispatch({
                type: actionTypes.UPDATE_FAIL,
                payload: err.message,
            }));
        case actionTypes.GET:
            return API.get("links", "/links").then(res => {
                
                dispatch({
                type: actionTypes.GET,
                payload: res.Items,
            })
        
        }
            
            ).catch( err => 
             {   
                debugger
                dispatch({
                type: actionTypes.GET_FAIL,
                payload: err.message,
            });
        });
        case actionTypes.DELETE:
            return API.delete("links",`links/${action.payload.linkId}`).then(res => dispatch({
                type: actionTypes.DELETE,
                payload: res.Items
            })).catch(err => dispatch({
                    type: actionTypes.DELETE_FAIL,
                    payload: err.message,
            }));
        default: dispatch(action)
    }
}