
import React, { useContext } from 'react';
import tw from 'twin.macro';
import TextBoxBody from './TextBoxBody';
import { StoreContext } from '../store/store';

const NoteTitle= tw.div`text-xl font-semibold text-center`

const Notes = () => {
    const { state,actions } = useContext(StoreContext)

    const saveBody = (data) => {
        actions.update(data);
    }

    return (
        <>
            <NoteTitle >{state?.links[state?.selected]?.title}</NoteTitle>
            { state.selected && <TextBoxBody saveAction={saveBody} link={state.links[state.selected]}  />}
        </>
    )

}
export default Notes;