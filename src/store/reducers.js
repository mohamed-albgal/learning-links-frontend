
import actionTypes from './actionTypes'
/*

data i need:    
                questions  = []
                where are images stored?
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
    let { link } = action.payload
    switch(action.type){
        case actionTypes.UPDATE:
            let mutation = action.payload.link
            // let links = [ ...state.links ]
            //find the one with this id
            let index = links.findIndex(x => x.source === mutation.source)
            if (index < 0) Error("how can the incoming mutated link not be present in the original list of links (index not found when calling reducer)?")
            // replace it with the mutated link
            links[index] = mutation
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
            links.push(link)
            links = [ ...links]
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
            let i = links.findIndex(e => e.source === link.source)
            links = [...(links.splice(i,1))];
            return { links }
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


/*
 * //another tutorial, i searched another because it wasn't clear why id need actions when i could just call the api in the reducer??
 * https://www.robinwieruch.de/react-usereducer-middleware/
 * /
