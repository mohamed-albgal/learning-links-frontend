
import { FaSearch } from 'react-icons/fa';
import actionTypes from './actionTypes'

const initialLinkState = { 
    loading: false,
    links: [],
    selected: null,
    error: '',
}

const linkReducer = (state=initialLinkState, action) => {
    switch(action.type){
        case actionTypes.GET:
            let links = {};
            action.payload.forEach(l => links[l.linkId] = l)
            return {
                ...state,
                links,
                loading: false,
            }
        case actionTypes.UPDATE:
            let mutation = action.payload
            let newLinks = { ...state.links }
            newLinks[mutation.linkId] = Object.assign(newLinks[mutation.linkId], mutation);
            return {
                ...state,
                links: newLinks,
                loading: false,
            }
        case actionTypes.UPDATE_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case actionTypes.CREATE:
            let l = { ...(state.links)}
            l[action.payload.linkId] = action.payload
            return { 
                ...state,
                links:l,
                loading: false,
            }
        case actionTypes.CREATE_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case actionTypes.DELETE:
            
            let stateLinks = {...(state.links)}
            delete stateLinks[action.payload.linkId];
            return { 
                ...state,
                selected: null,
                links: stateLinks,
                loading: false,
            }
        case actionTypes.DELETE_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case actionTypes.SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        case "updateSelected":
            return {
                ...state,
                loading: false,
                selected: action.payload
            }
        default:
            return { ...state };
    }
}

export { initialLinkState, linkReducer }


/** 
 * //another tutorial, i searched another because it wasn't clear why id need actions when i could just call the api in the reducer??
 * https://www.robinwieruch.de/react-usereducer-middleware/
 */
