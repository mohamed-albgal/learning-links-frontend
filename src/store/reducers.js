
import { FaSearch } from 'react-icons/fa';
import actionTypes from './actionTypes'
/*

data i need:    
                questions  = []
                id = string
                title = string
                images = []
                url = string 
                goals = []
                completedGoalsSoFar

                TODO: must change the lambda function (check with the mongodb schema that this will be ok?)
                i want to add new fields on post, change the create handler, call some method to update that  function lambda function so api gateway 'knows'

*/

// let schemaProperLink = 
    // {linkNotes, attachment, questions, topic}
// 
const initialLinkState = { 
    loading: false,
    links: [{}],
    error: '',
}

const linkReducer = (state=initialLinkState, action) => {
    let { links } = state;
    let  link  = action?.payload?.link
    switch(action.type){
        case actionTypes.GET:
            //add all from the db to the current state
            links = [ ...action.payload ]
            return {
                ...state,
                links,
                loading: false,
            }
        case actionTypes.UPDATE:
            let mutation = action.payload
            // let links = [ ...state.links ]
            //find the one with this id
            let index = links?.findIndex(x => x.linkId === mutation.linkId) || 0
            if (index < 0) Error("how can the incoming mutated link not be present in the original list of links (index not found when calling reducer)?")
            // replace it with the mutated link
            links[index] = Object.assign(links[index],mutation)
            return {
                ...state,
                links,
                loading: false,
            }
        case actionTypes.UPDATE_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case actionTypes.CREATE:
            links = [ ...links]
            links.push(link)
            return { 
                links,
                loading: false,
                ...state,
            }
        case actionTypes.CREATE_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case actionTypes.DELETE:
            //all of this untested
            
            let i = links.findIndex(e => e.linkId === action.payload.linkId)
            links = [...(links.splice(i,1))];
            return { 
                links,
                ...state,
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
        default:
            return { ...state };
    }
}

export { initialLinkState, linkReducer }


/** 
 * //another tutorial, i searched another because it wasn't clear why id need actions when i could just call the api in the reducer??
 * https://www.robinwieruch.de/react-usereducer-middleware/
 */
