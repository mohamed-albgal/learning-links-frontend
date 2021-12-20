import React, { useContext } from 'react';
import { LinkContext, SelectedLinkContext } from '../../Contexts';
import tw from 'twin.macro';
import TextBoxBody from '../TextBoxBody';
import { StoreContext } from '../../store/store';

const Container = tw.div`w-2/3 bg-gray-100 flex-1 p-10`;
const NoteTitle= tw.div`text-xl font-semibold text-center`

const RightSide =  () => {
    const { state, actions } = useContext(StoreContext)
    const { selected } = useContext(SelectedLinkContext);
    const updateSelectedLink = (body) => {
        let link =  { ...selected, linkNotes: body}
        actions.update(link);
    }
    return (
        <Container>
             <NoteTitle >{selected?.title}</NoteTitle>
            <TextBoxBody modifyLinkBody={updateSelectedLink}/>
        </Container>
    )
}
export default RightSide;
