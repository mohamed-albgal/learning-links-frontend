import React, { useContext } from 'react';
import tw from 'twin.macro';
import TextBoxBody from '../TextBoxBody';
import { StoreContext } from '../../store/store';

const Container = tw.div`w-2/3 bg-gray-100 relative flex-1 p-10`;
const NoteTitle= tw.div`text-xl font-semibold text-center`

const RightSide =  () => {
    const { state,actions } = useContext(StoreContext)
    const saveBody = (data) => {
        actions.update(data);
    }
    return (
        <Container>
             <NoteTitle >{state?.links[state?.selected]?.title}</NoteTitle>
            { state.selected && <TextBoxBody saveAction={saveBody} link={state.links[state.selected]}  />}
        </Container>
    )
}
export default RightSide;
