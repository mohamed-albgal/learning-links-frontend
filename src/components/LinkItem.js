import React ,{ useState, useContext } from 'react'
import tw, {styled} from'twin.macro';
import { LinkContext, SelectedLinkContext } from '../Contexts';
import { BsPencilSquare, BsCheck, BsX, BsTrash }  from 'react-icons/bs';
import { StoreContext } from '../store/store';



const Container = tw.div`relative    w-full bg-gradient-to-r from-gray-800 to-purple-800  p-4 my-3  rounded-md`
const Content = styled.button( () => [tw`min-h-full p-2 w-full font-thin text-white`] )
const ProgressBar = styled.div( () => [ tw`flex justify-items-start  h-1`])
const FormContainer = tw.div`w-full m-0 overflow-scroll`
const FormInput = tw.input`focus:outline-none focus:bg-gray-900 bg-gray-50 tracking-wider text-sm text-center pt-2 w-11/12 mx-2 border-b place-content-stretch border-yellow-100 rounded-sm bg-transparent`
const FormLabel = tw.div`text-xs my-5   `
const ProgressTick = tw.div`mr-3 h-1 w-1/6 bg-yellow-400`
const LinkTitle = tw.p`font-semibold my-3`
const EditIconContainer = tw.div`absolute top-0  left-0 mx-2 my-2 rounded-md  text-left `
const EditIcon = tw.button`text-xl text-gray-400 hover:text-yellow-300`
const Selected = tw(Container)`  left-10 from-black to-purple-400 border-r-8 border-yellow-300  `
const FormButtonPair = tw.div``
const IconButton = tw.button`inline mx-7 my-3 text-3xl bg-gray-900 rounded-full hover:border-gray-400 border border-gray-900`
const CheckButton = tw(IconButton)`text-purple-300 `
const XButton = tw(IconButton)`text-red-400 bg-gray-900 `
const TrashContainer = tw.div`text-xl text-gray-100 h-36 w-full`

//this will need a refactor to instead of having 3 components in one
const LinkForm = ({closeForm,openForm,link, deleteAction}) => {
    const [title, setTitle] = useState(link.title)
    const [goals, setGoals] = useState(link.goals)
    const [priority, setPriority] = useState(link.priority)
    return(<>
        <FormContainer>
            <FormLabel > <FormInput value={title} placeholder={"title"} onChange={e => setTitle(e.target.value)} /></FormLabel>
            <FormLabel ><FormInput value={goals} placeholder={"goals"} onChange={e => setGoals(e.target.value)} /></FormLabel>
            <FormLabel ><FormInput value={priority} placeholder={"priority"} onChange={e => setPriority(e.target.value)}  /></FormLabel>
        </FormContainer>
        <FormButtonPair>
            <CheckButton onClick={e => openForm({title,goals,priority})}><BsCheck/></CheckButton>
            <XButton onClick={closeForm} ><BsX/></XButton>
        </FormButtonPair>

        <TrashCan deleteAction={deleteAction} />
        </>
    )
};

const TrashCan = (deleteAction) => {
    return (
        <>
        <EditIcon onClick={deleteAction}><BsTrash color='black' /></EditIcon>
        </>
    )
};

const LinkContent = ({link, onClick,selected}) => {
    const showTicks = () => {
        return [...Array(link.goals).keys()].map(_ => <ProgressTick />)
    };
    return (
        <>
            <EditIconContainer>
                <EditIcon onClick={onClick}>
                    <BsPencilSquare/>
                </EditIcon>
            </EditIconContainer>
            <LinkTitle>{link.title}</LinkTitle>
            <ProgressBar >
                {showTicks()}
            </ProgressBar>
        </>
    )
}

// receives one link and its data

const LinkItem =  ({ link }) => {
    const [creating, setCreating ] = useState(!link)
    const { state, actions} = useContext(StoreContext);
    //will need this to modify the list of links with the newly created one
    const { selected, setSelected } = useContext(SelectedLinkContext)
    
    const ItemContainer = selected.source === link.source ? Selected : Container
    const modifyLink = (data) => {
        Object.assign(link,data);
        let a = link;
        actions.update(link);
    }


    const deleteButton = (e) => {
        e.stopPropagation();
        alert('deleted')
    }
    const editButtonClick = (e) => {
        e.stopPropagation();
        setCreating(!creating)
    }
    return (
        <ItemContainer  onClick={() => setSelected(link)} type="button">
            <Content >
                {creating ? 
                <LinkForm deleteAction={deleteButton} link={link} openForm={modifyLink} closeForm={()=>setCreating(false)} /> 
                : 
                <LinkContent onClick={editButtonClick} link={link} /> }
            </Content>
        </ItemContainer>
    )
};
export default LinkItem