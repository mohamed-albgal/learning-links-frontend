import React ,{ useContext, useEffect, useState } from 'react'
import tw from'twin.macro';
import { BsCheck, BsX, BsTrash }  from 'react-icons/bs';
import { LinkContainer } from './shared/StyleContainers';


const IconButton = tw.button`inline mx-7 my-3 text-5xl bg-gray-900 rounded-full hover:border-gray-400 border border-gray-900`
const TrashButton = tw.button`text-red-300 hover:border-red-500 hover:text-red-500 hover:bg-gray-800 p-2 bg-black rounded-md absolute bottom-2 right-3 font-thin border border-white`
const CheckButton = tw(IconButton)`text-purple-300 `
const XButton = tw.button`text-gray-400 bg-gray-900 text-4xl rounded-full absolute top-2 right-2  `
const FormButtonPair = tw.div``
const FormContainer = tw.div`w-full m-0 overflow-scroll`
const FormInput = tw.input`focus:outline-none focus:bg-gray-900 bg-gray-50 tracking-wider text-sm text-center pt-2 w-11/12 mx-2 border-b place-content-stretch border-yellow-100 rounded-sm bg-transparent`
const FormLabel = tw.div`text-xs my-5   `

const LinkForm = ({closeForm, saveForm,link={}, deleteAction=closeForm}) => {
    const [title, setTitle] = useState(link.title)
    const [sourceUrl, setSourceUrl] = useState(link.sourceUrl)
    const [goals, setGoals] = useState(link.goals)
    const [topic, setTopic] = useState(link.topic)
    const [priority, setPriority] = useState(link.priority)

    const saveChanges = () => saveForm({ title, sourceUrl, goals, topic,priority });

    return(
        <LinkContainer>
            <FormContainer>
                <FormLabel ><FormInput value={topic} placeholder={"topic"} onChange={e => setTopic(e.target.value)} /></FormLabel>
                <FormLabel ><FormInput value={title} placeholder={"title"} onChange={e => setTitle(e.target.value)} /></FormLabel>
                <FormLabel ><FormInput value={sourceUrl} placeholder={"source URL"} onChange={e => setSourceUrl(e.target.value)} /></FormLabel>
                <FormLabel ><FormInput value={goals} placeholder={"goals"} onChange={e => setGoals(e.target.value)} /></FormLabel>
                <FormLabel ><FormInput value={priority} placeholder={"priority"} onChange={e => setPriority(e.target.value)}  /></FormLabel>
                <FormButtonPair>
                    <CheckButton onClick={saveChanges}><BsCheck/></CheckButton>
                    <XButton onClick={closeForm} ><BsX/></XButton>
                    <TrashButton onClick={deleteAction}>Delete</TrashButton>
                </FormButtonPair>
            </FormContainer>
        </LinkContainer>
    )
};


export default LinkForm