import React ,{ useState, useContext } from 'react'
import tw, {styled} from'twin.macro';
import { FaEdit } from 'react-icons/fa' 
import { LinkContext, SelectedLinkContext } from '../Contexts';


//takes the title, id and a callback function for what to do when a certain link has been selected
const LinkItem =  ({ link }) => {
    const [editing, setEditing ] = useState(!link)
    //will need this to modify the list of links with the newly created one
    const { linksState, dispatchLinkActions } = useContext(LinkContext)
    const { selected, setSelected } = useContext(SelectedLinkContext)

    return (
            <Container onClick={() => setSelected(link)} type="button">
                <Content >
                   {editing ? <LinkModication /> : <LinkContent onClick={() => setEditing(!editing)} link={link} /> }
                </Content>
            </Container>
    )
};
export default LinkItem;
const Container = styled.div( () => [tw` relative border border-gray-900 w-full bg-gradient-to-r from-purple-900 to-purple-500  p-4 my-3  rounded-md`,]);
const Content = styled.button( () => [tw`min-h-full p-2 w-full font-thin text-white`] )
const ProgressBar = styled.div( () => [ tw`flex justify-items-start  h-1`])
const FormContainer = tw.div`w-full p-1  overflow-scroll`
const FormInput = tw.input`block bg-gray-50 px-2 w-3/4 mx-auto`
const FormLabel = tw.label` text-left px-2   text-white font-thin text-xs`
const ProgressTick = tw.div`mr-3 h-1 w-1/6 bg-yellow-400`
const LinkTitle = tw.p`font-semibold`
const EditIconContainer = tw.div`absolute top-0 hover:text-2xl left-0 mx-2 my-1 rounded-md  text-left `
const EditIcon = tw.button`text-2xl text-purple-200 hover:text-yellow-400`
const LinkModication = () => {
    return (
        <>
        <FormContainer>
            <FormLabel >Title</FormLabel>
            <FormInput />
            <FormLabel >Goals</FormLabel>
            <FormInput />
            <FormLabel >Priority</FormLabel>
            <FormInput />
        </FormContainer>

        </>
    )
}
const LinkContent = ({link, onClick}) => {
    return (
        <>
            <EditIconContainer>
                <EditIcon onClick={onClick}>
                    <FaEdit />
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