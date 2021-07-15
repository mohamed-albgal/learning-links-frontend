import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';
import { AuthContext  } from '../../AuthContext';
import {API} from 'aws-amplify'
import { FaPlus } from 'react-icons/fa'        


const LinkItem = ({title, linkId}) => {
    return (
        <div tw="w-full bg-indigo-400 hover:scale-150 rounded-sm p-4 my-3">
            <div tw="h-10 w-full">
                {title}
            </div>
        </div>
    )
}

const LinksContainer = ({drawerOpen}) => {
    const [ links, setLinks] = useState({});
    const [isCreating, setCreating] = useState(false);
    useEffect(() =>{
        //call the API as a first - render side-effect
        const load = async () => {
            try{
                const links = await loadLinkData()
                setLinks(links);
                console.log(links);
            }catch(e) {
                console.log(e);
            }
        }    
        load()
    },[])
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
        return <>
            <LinkItem title="Learn Linux" />
            <LinkItem title="AWS Certified Associates Exam" />
            <LinkItem title="Arup Best Practices for engineers" />
        
        </>
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