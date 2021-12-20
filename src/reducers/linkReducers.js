
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
export const linkReducer = (state, action) => {
    let { links } = state;
    let { link } = action.payload
    switch(action.type){
        case 'mutateOneLink':
            //can't change the state directly, make a copy of it and then change that, 
            //don't confuse locally scoped 'links' with the one stored in the state!
            let mutation = action.payload.link
            // let links = [ ...state.links ]
            //find the one with this id
            let index = links.findIndex(x => x.source === mutation.source)
            if (index < 0) Error("how can the incoming mutated link not be present in the original list of links (index not found when calling reducer)?")
            // replace it with the mutated link
            links[index] = mutation
            return {
                links,
            }
        case 'newLinkItem':
            links.push(link)
            links = [ ...links]
            return { links }
        case 'deleteItem':
            //all of this untested
            let i = links.findIndex(e => e.source === link.source)
            links = [...(links.splice(i,1))];
            return { links }
        default:
            return state;
    }
}

export const initialLinkState = {
    links: [{}],
}
