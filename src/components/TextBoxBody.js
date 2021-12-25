import React, { useState, useContext, useEffect } from 'react'
import tw from 'twin.macro'
import { SelectedLinkContext } from '../Contexts'
import { StoreContext } from '../store/store'
import Button from './Button'

const TextAreaContainer = tw.div`block mx-auto h-screen`
const TextArea = tw.textarea` block mx-auto p-10 w-11/12 h-96 max-h-screen font-mono overflow-scroll whitespace-pre-wrap`
const CommitButton = tw(Button)`h-10 w-32 font-thin mt-6`

const TextBoxBody = ({link, saveAction}) => {
    // const { state, actions } = useContext(StoreContext)
    const [ body, setBody ] = useState(link.linkNotes)
    // useEffect(()=>{
        // setBody(state?.links[state?.selected]?.linkNotes);
    // },[state?.selected])

    // const commitChanges =  () => {
        // actions.update({ linkId: state.selected, linkNotes: body});
    // }
    return (
        <>
            <TextAreaContainer>            
                <TextArea value={body} onChange={e => setBody(e.target.value)}     />
                <CommitButton onClick={() => saveAction({...link, linkNotes: body})}>Save</CommitButton>
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

