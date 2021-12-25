import React, { useContext, useState } from 'react'
import tw from 'twin.macro'
import { Spinner } from './shared/Elements'
import Button from './Button'
import { StoreContext } from '../store/store'

const TextAreaContainer = tw.div`block mx-auto h-screen`
const TextArea = tw.textarea` block mx-auto p-10 w-11/12 h-96 max-h-screen font-mono overflow-scroll whitespace-pre-wrap`
const CommitButton = tw(Button)`h-10 w-32 font-thin mt-6`

const TextBoxBody = ({link, saveAction}) => {
    const [ body, setBody ] = useState(link.linkNotes)
    const { state } = useContext(StoreContext);
    
    const saveChanges = () => {
        // only save if changes made
        if (link.linkNotes !== body)
            saveAction({...link, linkNotes: body})
    }
    return (
        <TextAreaContainer>            
            <TextArea value={body} onChange={e => setBody(e.target.value)} />
            {state.loading ? null: <CommitButton onClick={saveChanges}>Save</CommitButton>}
        </TextAreaContainer>
    )
}

export default TextBoxBody;
