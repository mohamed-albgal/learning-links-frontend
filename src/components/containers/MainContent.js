import React, {useState, useEffect} from 'react';
import tw, { styled } from 'twin.macro'
import RightSide from './RightSide'
import LeftSide from './LeftSide';

const dummyLinks = [
    {
      id: 0,
      title: " Learning Linux",
      body: "Linux is a nice OS\n learning it is beneficial",
      goals: 6,
      completedGoals: 1, 
  },   
  {
      id: 1,
      title: "AWS Certified Associate Solutions Architect",
      body: "I will become AWS certified because I am driven\n learning it is beneficial",
      goals: 10,
      completedGoals: 4, 
      completedGoals: 4, 
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

const MainContent =  () => {
    const [selectedNote, setSelectedNote] = useState({});
    const [links, setLinks] = useState([]);
    
    useEffect( () => {
        setLinks(dummyLinks.map(link => {
            return (
                { id: link.id, title: link.title }
                )
            }));
            
        },[dummyLinks]);

    const Container = tw.div`mt-10 fixed top-10 flex w-full h-screen items-stretch`
    
    const handleSelectedNote = (id) => {
        setSelectedNote(dummyLinks[id]);
    }
    
    const handleUpdateNote = (body) => {
        setSelectedNote( prev => ({ ...prev, body}))
    }
        
    return (
        <Container >
            <LeftSide linkData={links} onLinkSelect={handleSelectedNote}  />
            <RightSide linkData={selectedNote} onNoteBodyChange={handleUpdateNote}  />
        </Container>
    )
}
export default MainContent;