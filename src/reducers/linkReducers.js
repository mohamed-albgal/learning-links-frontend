
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


    */
    const dummyLinks = [
    {
      title: "Learning Linux",
      topic: "tech",
      source: "https://linuxjourney.com/",
      linkNotes: "Linux is a nice OS\n learning it is beneficial",
      goals: 6,
      completedGoals: 1, 
      questions: {0:{"Some Question":"Some answer"}, 1:{"other question":"other answer"}}
    },   
    {
      title: "AWS Certified Associate Solutions Architect",
      topic: "tech",
      source: "https://www.acloudguruthere.com/",
      linkNotes: "I will become AWS certified because I am driven\n learning it is beneficial",
      goals: 10,
      completedGoals: 4,
      questions: {0:{"Some Question":"Some answer"}, 1:{"other question":"other answer"}} 
    },   

  {
      topic: "tech",
      title: "Become a better developer",
      linkNotes: " I know I can be better,\n I just have to remain focused and stay to the course!",
      source: "https://www.1codecademy.com/",
      goals: 20,
      completedGoals: 12, 
      questions: {0:{"Some Question":"Some answer"}, 1:{"other question":"other answer"}}
  },   {
      topic: "tech",
      title: "Sql mastery",
      linkNotes: "Learning sql means a lot of practice and a lot of tables being made!",
      goals: 6,
      completedGoals: 1, 
      source: "https://www.masterywithsql.com/",
      questions: {0:{"Some Question":"Some answer"}, 1:{"other question":"other answer"}}
  },   

  {
      topic: "tech",
      title: "Ruby guru",
      linkNotes: "Ruby is just another programming language that I will learn and master!",
      goals: 10,
      completedGoals: 4, 
      source: "https://www.ruby-lang.org/en/documentation/quickstart/",
      questions: {0:{"Some Question":"Some answer"}, 1:{"other question":"other answer"}}
  },   

  {
      topic: "tech",
      title: "Learn NoSql",
      linkNotes: " NoSql is important to learn just like no sql is!",
      goals: 20,
      completedGoals: 12, 
      source: "https://www.edx.org/learn/nosql",
      questions: {0:{"Some Question":"Some answer"}, 1:{"other question":"other answer"}}
  },   
]
export const linkReducer = (state, action) => {
    debugger
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
    links: [...dummyLinks],
}
