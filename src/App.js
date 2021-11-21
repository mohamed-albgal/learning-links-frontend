import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { AuthContext }  from './Contexts';
import NavBar from './components/NavBar'
import MainContent from './components/containers/MainContent'
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

const App = () => {
  const [authed, setAuthed] = useState(null);
  useEffect ( () => {
    !authed && checkUserSession();
    // console.log(authed)
  },[authed])

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
            {authed? <MainContent /> : <SignUp />}
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
