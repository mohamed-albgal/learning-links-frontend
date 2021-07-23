import React, { useState, useContext, useEffect } from 'react'
import tw from 'twin.macro'
import { LinkContext } from '../Contexts'
import Button from './Button'

const TextAreaContainer = tw.div`block mx-auto h-screen`
const TextArea = tw.textarea` block mx-auto p-10 w-11/12 h-96 max-h-screen font-mono overflow-scroll whitespace-pre-wrap`
const NoteTitle= tw.div`text-xl font-semibold text-center`
const CommitButton = tw(Button)`h-10 w-32 font-thin mt-6`

const TextBoxBody = () => {
    const { linksState, dispatchLinkActions } = useContext(LinkContext)
    const [ body, setBody ] = useState(linksState.links[linksState.displayed].body)
    // useEffect(() => {
    //     console.log("changed?")
    // },[linksState])

    const updateText = (e) => {
        e.preventDefault()
        dispatchLinkActions({ type: "updateLink", payload:{ body }})
    }
    return (
        <>
            <NoteTitle >{linksState.links[linksState.displayed].title}</NoteTitle>
            <TextAreaContainer>            
                <TextArea value={body} onChange={e => setBody(e.target.value)}     />
                <CommitButton onClick={updateText} >Save Changes</CommitButton>
            </TextAreaContainer>
        </>
    )
}

export default TextBoxBody;
/**
 * solution that fixed bug:
 *  bug: controlled component was having the text content of the textarea lose focus on each state update(re-render) i.e: every time i clicked
 * , textarea loses focus.
 * 
 * solution:
 *  move the definition of the component outside of the component. On re-render, the comopnent was getting created all over again
 * moving the component's styling outside solved the issue
 */

