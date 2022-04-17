import React, { useContext } from 'react';
import tw from 'twin.macro';
import { StoreContext } from '../store/store';

const NoteTitle= tw.div`text-xl font-semibold text-center`

const Pictures = () => {
    const { state, actions } = useContext(StoreContext)

    const saveBody = (data) => {
        actions.update(data);
    }

    return (
        <>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
        </>
    )

}
export default Pictures;