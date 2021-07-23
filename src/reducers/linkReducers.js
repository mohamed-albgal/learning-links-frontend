
const dummyLinks = [
    {
      id: 0,
      title: " Learning Linux",
      body: "Linux is a nice OS\n learning it is beneficial",
      goals: 6,
      completedGoals: 1, 
      source: "",
  },   

  {
      id: 1,
      title: "AWS Certified Associate Solutions Architect",
      body: "I will become AWS certified because I am driven\n learning it is beneficial",
      goals: 10,
      completedGoals: 4, 
      completedGoals: 4, 
      source: "",
  },   

  {
      id: 2,
      title: "Become a better developer",
      body: " I know I can be better,\n I just have to remain focused and stay to the course!",
      goals: 20,
      completedGoals: 12, 
      source: "",
  },
]
export const linkReducer = (state, action) => {
    switch(action.type){
        case 'displayLink':
            return {
                ...state,
                displayed: action.payload.id
            }
        case 'updateLink':
            //can't change the state directly, make a copy of it and then change that, 
            //don't confuse locally scoped 'links' with the one stored in the state!
            let links = [ ...state.links ]
            links[state.displayed] = { ...state.links[state.displayed], body: action.payload.body}
            return {
                ...state,
                links,
            }

        default:
            return state;
    }
}

export const initialLinkState = {
    displayed: 0,
    links: [...dummyLinks],
}
