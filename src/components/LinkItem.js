import React ,{ useState, useContext } from 'react'
import tw, {styled} from'twin.macro';
import { LinkContext, SelectedLinkContext } from '../Contexts';
import { BsPencilSquare, BsCheck, BsX }  from 'react-icons/bs';



const Container = tw.div`relative    w-full bg-gradient-to-r from-purple-900 to-purple-500  p-4 my-3  rounded-md`
const Content = styled.button( () => [tw`min-h-full p-2 w-full font-thin text-white`] )
const ProgressBar = styled.div( () => [ tw`flex justify-items-start  h-1`])
const FormContainer = tw.div`w-full m-0 overflow-scroll`
const FormInput = tw.input` bg-gray-50 tracking-wider text-sm text-center pt-2 w-full mx-2 border-b place-content-stretch border-yellow-100 rounded-sm bg-transparent`
const FormLabel = tw.div`text-xs my-5   `
const ProgressTick = tw.div`mr-3 h-1 w-1/6 bg-yellow-400`
const LinkTitle = tw.p`font-semibold my-3`
const EditIconContainer = tw.div`absolute top-0  left-0 mx-2 my-2 rounded-md  text-left `
const EditIcon = tw.button`text-xl text-gray-400 hover:text-yellow-300`
const Selected = tw(Container)`  left-10  border-r-8 border-yellow-300 `
const FormButtonPair = tw.div``
const IconButton = tw.button`mx-7 my-3 text-3xl bg-gray-900 rounded-full hover:border-gray-400 border border-gray-900`
const CheckButton = tw(IconButton)`text-purple-300 `
const XButton = tw(IconButton)`text-red-400 bg-gray-900 `

const LinkModication = ({closeForm,openForm}) => (
    <>
        <FormContainer>
            <FormLabel > <FormInput placeholder="Title" /></FormLabel>
            <FormLabel ><FormInput placeholder="Goals" /></FormLabel>
            <FormLabel ><FormInput placeholder="Priority" /></FormLabel>
        </FormContainer>
        <FormButtonPair>
            <CheckButton onClick={openForm}><BsCheck/></CheckButton>
            <XButton onClick={closeForm} ><BsX/></XButton>
        </FormButtonPair>

    </>
);

const LinkContent = ({link, onClick}) => {
    return (
        <>
            <EditIconContainer>
                <EditIcon onClick={onClick}>
                    <BsPencilSquare/>
                </EditIcon>
            </EditIconContainer>
            <LinkTitle>{link.title}</LinkTitle>
            <ProgressBar >
                <ProgressTick/>
                <ProgressTick/>
                <ProgressTick/>
                <ProgressTick/>
            </ProgressBar>
        </>
    )
}

// receives one link and its data
const LinkItem =  ({ link }) => {
    const [creating, setCreating ] = useState(!link)
    //will need this to modify the list of links with the newly created one
    const { linksState, dispatchLinkActions } = useContext(LinkContext)
    const { selected, setSelected } = useContext(SelectedLinkContext)
    
    const ItemContainer = selected.id === link.id ? Selected : Container


    return (
            <ItemContainer long={creating}  onClick={() => setSelected(link)} type="button">
                <Content >
                   {creating ? <LinkModication openForm={()=>alert("cool")} closeForm={()=>setCreating(false)} /> : <LinkContent onClick={() => setCreating(!creating)} link={link} /> }
                </Content>
            </ItemContainer>
    )
};
export default LinkItem;
