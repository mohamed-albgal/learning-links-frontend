import React, { useContext } from 'react';
import { LinkContext, SelectedLinkContext } from '../../Contexts';
import tw from 'twin.macro';
import TextBoxBody from '../TextBoxBody';
import { StoreContext } from '../../store/store';

const Container = tw.div`w-2/3 bg-gray-100 relative flex-1 p-10`;
const NoteTitle= tw.div`text-xl font-semibold text-center`
const SpinnerContainer = tw.div` bg-transparent  opacity-70  p-2 h-20 w-20 top-1/4 right-1/2 rounded-full absolute `
const Spinner = tw.div`animate-spin rounded-full absolute  w-full h-full  p-2  border-t-4 border-r-4 border-purple-700 `

const RightSide =  () => {
    const { state,actions } = useContext(StoreContext)
    const saveBody = (data) => {
        actions.update(data);
    }
    const SpinningThing = () => (
        <SpinnerContainer>
            <Spinner />
        </SpinnerContainer>
    ) 
    return (
        <Container>
            {state.loading && <SpinningThing /> }
             <NoteTitle >{state?.links[state?.selected]?.title}</NoteTitle>
            { state.selected && <TextBoxBody saveAction={saveBody} link={state.links[state.selected]}  />}
        </Container>
    )
}
export default RightSide;
