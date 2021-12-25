import React, { useContext } from 'react';
import tw from 'twin.macro';
import TextBoxBody from '../TextBoxBody';
import { StoreContext } from '../../store/store';
import Button from '../Button';
const Container = tw.div`w-2/3 bg-gray-100 relative flex-1 p-10`;
const NoteTitle= tw.div`text-xl font-semibold text-center`
const TabBar = tw.div`flex   bg-purple-900 rounded-full py-2 w-1/2 mx-auto mb-10  justify-around self-center`
const TabButton = tw(Button)`mx-3 border border-black h-10 rounded-full w-full bg-yellow-400 `

const RightSide =  () => {
    const { state,actions } = useContext(StoreContext)
    const saveBody = (data) => {
        actions.update(data);
    }
    return (
        <Container>
            <TabBar>
                <TabButton>Notes</TabButton>
                <TabButton>Questions</TabButton>
                <TabButton>Images</TabButton>
            </TabBar>
             <NoteTitle >{state?.links[state?.selected]?.title}</NoteTitle>
            { state.selected && <TextBoxBody saveAction={saveBody} link={state.links[state.selected]}  />}
        </Container>
    )
}
export default RightSide;
