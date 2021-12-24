import React, { useContext } from 'react';
import { LinkContext, SelectedLinkContext } from '../../Contexts';
import tw from 'twin.macro';
import TextBoxBody from '../TextBoxBody';
import { StoreContext } from '../../store/store';

const Container = tw.div`w-2/3 bg-gray-100 flex-1 p-10`;
const NoteTitle= tw.div`text-xl font-semibold text-center`
//TODO: this spinning thing needs work
const SpinnerContainer = tw.div` bg-purple-900 opacity-70  h-20 w-20 top-1/4 bottom-1/4 rounded-full absolute `
const Spinner = tw.div`animate-spin rounded-full absolute p-2  w-1/2 h-1/2 border-t-4 border-r-2 border-purple-100 `
const Spinner2 = tw.div`animate-spin rounded-full absolute p-4  bottom-1 top-3 w-1/3 h-1/3 border-t-4 border-r-2 border-purple-100 `

const RightSide =  () => {
    const { state } = useContext(StoreContext)
    const SpinningThing = () => (
        <SpinnerContainer>
            <Spinner />
            <Spinner2 />
        </SpinnerContainer>
    ) 
    return (
        <Container>
            {true && <SpinningThing /> }
             <NoteTitle >{state?.links[state?.selected]?.title}</NoteTitle>
            <TextBoxBody />
        </Container>
    )
}
export default RightSide;
