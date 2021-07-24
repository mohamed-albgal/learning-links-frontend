import React ,{ useState, useContext } from 'react'
import tw, {styled} from'twin.macro';
import { LinkContext } from '../Contexts';

const Container = styled.div( () => [tw` relative border border-gray-900 w-full bg-gradient-to-r from-purple-900 to-purple-500  p-4 my-3  rounded-md`,]);
const Content = styled.button( () => [tw`min-h-full p-2 w-full font-thin text-white`] )
const ProgressBar = styled.div( () => [ tw`flex justify-items-start  h-1`])
const FormContainer = tw.div`w-full p-1  overflow-scroll`
const FormInput = tw.input`block bg-gray-50 px-2 w-3/4 mx-auto`
const FormLabel = tw.label`block text-left px-2 w-3/4 mx-auto  text-white font-thin text-xs`
const ProgressTick = tw.div`mr-3 h-1 w-1/6 bg-yellow-400`
const LinkTitle = tw.p`font-semibold`
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
const LinkContent = ({link}) => {
    return (
        <>
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
const LinkItem =  ({ link, onSelect }) => {
    const [creating, setCreating ] = useState(!link)
    const { linksState, dispatchLinkActions } = useContext(LinkContext)

    return (
            <Container>
                <Content onClick={onSelect}>
                   {creating ? <LinkModication /> : <LinkContent link={link} /> }
                </Content>
            </Container>
    )
};
export default LinkItem;
