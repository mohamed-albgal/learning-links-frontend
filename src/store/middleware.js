import { API } from 'aws-amplify';
import actionTypes from './actionTypes';


export const applyMiddleware = dispatch => action => {
    switch(action.type){
        case actionTypes.UPDATE:
            debugger
            return API.put("links", `/links/${action.payload.linkId}`, {body: action.payload}).then(res => {
                
                debugger
                //still have to merge what came back with what you have, i think
                // this only returns what was modified
                action.payload = Object.merge(action.payload, res)
                dispatch({
                    type: actionTypes.UPDATE,
                    payload: action.payload 
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