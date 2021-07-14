import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import NavBar from './components/NavBar'
import MainContentContainer from './components/containers/MainContentContainer'

const App = () => {
  const [isAuthed, setIsAuthed] = useState(true);
  return (
    <>
      <NavBar />
      <MainContentContainer authed={isAuthed} />
    </>
  )
};  
export default App;
