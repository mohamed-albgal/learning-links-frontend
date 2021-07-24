import React, { useContext, useState } from 'react';
import { LinkContext } from '../../Contexts';
import tw from 'twin.macro';
import TextBoxBody from '../TextBoxBody';
import { SelectedLinkContext } from './LeftSide';

const Container = tw.div`w-2/3 bg-gray-100 flex-1 p-10`;
const NoteTitle= tw.div`text-xl font-semibold text-center`

const RightSide =  () => {
    const { dispatchLinkActions } = useContext(LinkContext)
    const { selected } = useContext(SelectedLinkContext);
    const updateSelectedLink = (body) => {
        let link =  { ...selected, body}
        dispatchLinkActions({type:"mutateOneLink", payload:{ link }})
    }
    return (
        <Container>
             <NoteTitle >{selected.title}</NoteTitle>
            <TextBoxBody modifyLinkBody={updateSelectedLink}/>
        </Container>
    )
}
export default RightSide;
