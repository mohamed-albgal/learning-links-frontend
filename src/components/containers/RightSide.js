import React, { useContext } from 'react';
import { LinkContext, SelectedLinkContext } from '../../Contexts';
import tw from 'twin.macro';
import TextBoxBody from '../TextBoxBody';
import { StoreContext } from '../../store/store';

const Container = tw.div`w-2/3 bg-gray-100 flex-1 p-10`;
const NoteTitle= tw.div`text-xl font-semibold text-center`
//TODO: this spinning thing needs work
const SpinnerContainer = tw.div` backdrop-grayscale bg-purple-900 opacity-70 absolute top-1/3 h-1/3 w-1/3  `
const Spinner = tw.div`animate-spin rounded-full w-1/3 h-1/3 border-t-4 border-b-2 border-purple-100 `

const RightSide =  () => {
    const { state, actions } = useContext(StoreContext)
    const { selected } = useContext(SelectedLinkContext);
    const updateSelectedLink = (body) => {
        let link =  { ...selected, linkNotes: body}
        actions.update(link);
    }
    const SpinningThing = () => (
        <SpinnerContainer>
            <Spinner />
        </SpinnerContainer>
    ) 
    return (
        <Container>
            {state.loading && <SpinningThing /> }
             <NoteTitle >{selected?.title}</NoteTitle>
            <TextBoxBody modifyLinkBody={updateSelectedLink}/>
        </Container>
    )
}
export default RightSide;
