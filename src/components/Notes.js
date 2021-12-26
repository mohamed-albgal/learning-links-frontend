
import React, { useContext } from 'react';
import tw from 'twin.macro';
import TextBoxBody from './TextBoxBody';
import { StoreContext } from '../store/store';

const NoteTitle= tw.div`text-xl font-semibold text-center`

const Notes = () => {
    const { state,actions } = useContext(StoreContext)
    const link = state.links[state.selected]

    const saveBody = (data) => {
        actions.update(data);
    }


    return (
        <>
            <NoteTitle >{link.title}</NoteTitle>
            <TextBoxBody saveAction={saveBody} link={state.links[state.selected]}  />
        </>
    )

}
export default Notes;