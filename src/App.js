import React, { useState, useEffect } from 'react';
import { Auth, API } from 'aws-amplify';
import { AuthContext }  from './Contexts';
import NavBar from './components/NavBar'
import MainContent from './components/containers/MainContent'
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { initialLinkState } from './reducers/linkReducers';

const App = () => {
  const [authed, setAuthed] = useState(null);
  const [DBLinks, setDBLinks] = useState(initialLinkState);
  useEffect ( () => {
    !authed && checkUserSession()
  },[authed])

  useEffect(() => {
    callAPI()
    //ideally, on teardown, update the cached links to persist changes?
  },[])

  const callAPI = async () => {

    try{
      //merge what the db has and what i have until i can remove the dummyLinks without causing undefined ref errors
      API.get("links", "/links").then(data => {
        //items is an array of objects inside of data
        //append that to the array of objects that is in initiallinksstate called links
        const all = (initialLinkState.links.push(...data.Items));
        setDBLinks(initialLinkState);
      })
    }catch(e){
      console.log('error getting the db messages');
      console.log(e.message)
    }
  }
  const checkUserSession = async () => {
    try {
      const user = await Auth.currentUserInfo();
      setAuthed({id: user.id, username:user.username, email:user.attributes.email});
    }catch(e) {
      console.log(e.message);
      console.log("error checking for the user's session");
    }
  }
  const providerValue = { authed, setAuthed };

  return (
    <>
      <AuthContext.Provider value={providerValue} > 
        <NavBar />
        <Switch>
          <Route exact path='/'>
            {authed? <MainContent links={DBLinks}/> : <SignUp />}
          </Route>
          <Route exact path='/signin'>
            <SignIn />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </AuthContext.Provider >
    </>
  )
};  
export default App;


// use a middleware hook to talk to the db, this shows how
//
//https://medium.com/@rossitrile93/how-i-replace-redux-redux-saga-with-react-446b4c84f788

//cache the data and fetch using a hook
//https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/