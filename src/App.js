import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { AuthContext }  from './AuthContext';
import NavBar from './components/NavBar'
import MainContentContainer from './components/containers/MainContentContainer'
import { Switch, Route } from 'react-router-dom';

const App = () => {
  const [authed, setAuthed] = useState(null);
  useEffect ( () => {
    !authed && checkUserSession();
  },[])

  const checkUserSession = async () => {
    try {
      const user = await Auth.currentUserInfo();
      setAuthed({id: user.id, username:user.username, email:user.attributes.email});
    }catch(e) {
      console.log(e.message);
      console.log("error checking for the user's session");
    }
  }
  return (
    <>
      <AuthContext.Provider value={{ authed, setAuthed }} > 
        <NavBar />
        <MainContentContainer />
      </AuthContext.Provider >
    </>
  )
};  
export default App;
