import React ,{ useState, useContext } from 'react'
import tw, {styled} from'twin.macro';
import { BsCheck, BsX, BsTrash }  from 'react-icons/bs';
import { StoreContext } from '../store/store';
import Button from "./Button";


const IconButton = tw.button`inline mx-7 my-3 text-3xl bg-gray-900 rounded-full hover:border-gray-400 border border-gray-900`
const TrashButton = tw(IconButton)`text-gray-100 `
const CheckButton = tw(IconButton)`text-purple-300 `
const XButton = tw(IconButton)`text-red-400 bg-gray-900 `
const FormButtonPair = tw.div``
const FormContainer = tw.div`w-full m-0 overflow-scroll`
const FormInput = tw.input`focus:outline-none focus:bg-gray-900 bg-gray-50 tracking-wider text-sm text-center pt-2 w-11/12 mx-2 border-b place-content-stretch border-yellow-100 rounded-sm bg-transparent`
const FormLabel = tw.div`text-xs my-5   `

const LinkForm = ({closeForm, saveForm,link={}, deleteAction=closeForm}) => {
    const [title, setTitle] = useState(link.title)
    const [source, setSource] = useState(link.source)
    const [goals, setGoals] = useState(link.goals)
    const [topic, setTopic] = useState(link.topic)
    const [priority, setPriority] = useState(link.priority)

    return(<>
         <FormContainer>
            <FormLabel ><FormInput value={topic} placeholder={"topic"} onChange={e => setTopic(e.target.value)} /></FormLabel>
            <FormLabel ><FormInput value={title} placeholder={"title"} onChange={e => setTitle(e.target.value)} /></FormLabel>
            <FormLabel ><FormInput value={source} placeholder={"source"} onChange={e => setSource(e.target.value)} /></FormLabel>
            <FormLabel ><FormInput value={goals} placeholder={"goals"} onChange={e => setGoals(e.target.value)} /></FormLabel>
            <FormLabel ><FormInput value={priority} placeholder={"priority"} onChange={e => setPriority(e.target.value)}  /></FormLabel>
        <FormButtonPair>
            <CheckButton onClick={() => saveForm({title, source, goals, priority})}><BsCheck/></CheckButton>
            <XButton onClick={closeForm} ><BsX/></XButton>
            <TrashButton onClick={deleteAction} ><BsTrash /></TrashButton>
        </FormButtonPair>
        </FormContainer>

        </>
    )
};


export default LinkForm