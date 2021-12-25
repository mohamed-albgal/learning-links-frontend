import React, { useState } from 'react'
import tw from 'twin.macro'
import Button from './Button'

const TextAreaContainer = tw.div`block mx-auto h-screen`
const TextArea = tw.textarea` block mx-auto p-10 w-11/12 h-96 max-h-screen font-mono overflow-scroll whitespace-pre-wrap`
const CommitButton = tw(Button)`h-10 w-32 font-thin mt-6`

const TextBoxBody = ({link, saveAction}) => {
    const [ body, setBody ] = useState(link.linkNotes)
    return (
        <TextAreaContainer>            
            <TextArea value={body} onChange={e => setBody(e.target.value)}     />
            <CommitButton onClick={() => saveAction({...link, linkNotes: body})}>Save</CommitButton>
        </TextAreaContainer>
    )
}

export default TextBoxBody;
