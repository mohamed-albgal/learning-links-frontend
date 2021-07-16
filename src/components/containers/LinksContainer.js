import React, { useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import {API, navItem} from 'aws-amplify'
import { FaPlus } from 'react-icons/fa'        
import Button from '../Button';
import { GiConsoleController } from 'react-icons/gi';


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
const LinksContainer = ( { showNote }) => {
    const [ links, setLinks] = useState({});
    const [isCreating, setCreating] = useState(false);
    // useEffect(() =>{
    //     //call the API as a first - render side-effect
    //     const load = async () => {
    //         try{
    //             const links = await loadLinkData()
    //             setLinks(links);
    //             console.log(links);
    //         }catch(e) {
    //             console.log(e);
    //         }
    //     }    
    //     load()
    // },[])

    const handleLinkClick = (key) => {
        console.log(key)
        if (dummyLinks[key]) console.log(dummyLinks[key])
        else console.log("its undefined!!")
    }
    const LinkItemContainer = styled.div( () => [tw` relative border border-gray-900 w-full bg-gradient-to-r from-purple-900 to-purple-500  p-4 my-3  rounded-md`,]);
    const LinkContent = styled.div( () => [tw`h-10 p-2 w-full font-thin text-white`] )
    const ProgressBar = styled.div( () => [ tw`flex justify-items-start  h-1`])
    const ProgressTick = tw.div`mr-3 h-1 w-1/6 bg-yellow-400`
    // for every goal, map a progress tick, for every completed goal, color an existing (invisible) tick
    const ShowButton = tw(Button)`absolute right-0 top-0 m-1 w-9 h-auto `
    const LinkItem = ({title, itemkey }) => (
            <LinkItemContainer key={itemkey} >
                <LinkContent>{title}
                <ShowButton onClick={ () => showNote(dummyLinks[itemkey]) }>
                    &rarr;
                </ShowButton>
                    <ProgressBar >
                        <ProgressTick/>
                        <ProgressTick/>
                        <ProgressTick/>
                        <ProgressTick/>
                    </ProgressBar>
                </LinkContent>
            </LinkItemContainer>
    );
    const NewLinkForm = () => {
        // TODO:
        //  renders a form to collect new attributes
        //  post changes to db, change state of component to !isCreating
    }

    const RenderLinkItems = () => {
        // TODO: map links.items to a <LinkItem> component
        // return links["items"].map(item  => {
        //     <LinkItem key={item.id} title={item.title}/>
        // });
            return dummyLinks.map( item => <LinkItem itemkey={item.id} title={item.title} />)

    }
    const loadLinkData = () =>{
        return API.get("links", "/links");
    }

    const PlusContainer = tw.div`py-5 text-center`
    const IconStyle = tw.button`text-gray-800 text-4xl`
    const LinkList = tw.div``
    return (
        <>
            <LinkList>
                { !isCreating ? <RenderLinkItems /> : <NewLinkForm /> }
            </LinkList>
            <PlusContainer >
                <IconStyle onClick={() => alert("click")} ><FaPlus/></IconStyle>
            </PlusContainer>
        </>
    )
}

export default LinksContainer


/**
 * 
 * query for each item for the authed user
 *  for each item, create a link item, tie to the add button 
 * 
 */