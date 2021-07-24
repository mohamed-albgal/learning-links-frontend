import React ,{ useState, useContext } from 'react'
import tw, {styled} from'twin.macro';
import { LinkContext, SelectedLinkContext } from '../Contexts';
import { BsCardText } from 'react-icons/bs';



const Container = tw.div`relative border border-gray-900 w-full bg-gradient-to-r from-purple-900 to-purple-500  p-4 my-3  rounded-md`
const Content = styled.button( () => [tw`min-h-full p-2 w-full font-thin text-white`] )
const ProgressBar = styled.div( () => [ tw`flex justify-items-start  h-1`])
const FormContainer = tw.div`w-full p-1  overflow-scroll`
const FormInput = tw.input` bg-gray-50  mx-auto`
const FormLabel = tw.label`  text-left     text-white font-thin text-xs`
const ProgressTick = tw.div`mr-3 h-1 w-1/6 bg-yellow-400`
const LinkTitle = tw.p`font-semibold`
const EditIconContainer = tw.div`absolute top-0 hover:text-2xl left-0 mx-2 my-1 rounded-md  text-left `
const EditIcon = tw.button`text-2xl text-purple-200 hover:text-yellow-400`
const Selected = tw(Container)`relative left-6  border-r-8 border-yellow-300 `
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
                    <BsCardText/>
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
//takes the title, id and a callback function for what to do when a certain link has been selected
const LinkItem =  ({ link }) => {
    const [creating, setCreating ] = useState(!link)
    //will need this to modify the list of links with the newly created one
    const { linksState, dispatchLinkActions } = useContext(LinkContext)
    const { selected, setSelected } = useContext(SelectedLinkContext)
    
    const ItemContainer = selected.id === link.id ? Selected : Container


    return (
            <ItemContainer  onClick={() => setSelected(link)} type="button">
                <Content >
                   {creating ? <LinkModication /> : <LinkContent onClick={() => setCreating(!creating)} link={link} /> }
                </Content>
            </ItemContainer>
    )
};
export default LinkItem;
