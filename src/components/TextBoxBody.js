import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import Button from './Button'


const TextBoxBody = ( {note} ) => {
    const [content, setContent] = useState(note);

    const TextAreaContainer = tw.div`mx-auto h-screen`
    const TextArea = tw.textarea`mx-auto p-10 w-11/12 font-mono overflow-scroll whitespace-pre-wrap`
    const NoteTitle= tw.div`text-xl font-semibold text-center`
    const handleChange = (e) => {
        setContent({
            body: e.target.value ,
            ...content,});
    } 

    const handleBlur = (e) =>{
        console.log("final state: ", e.target.value)
        console.log("compare this with the state of the variable: ", content.body);
    }

    return (
        <>
            <NoteTitle >{content.title}</NoteTitle>
            <TextAreaContainer>            
                <TextArea value={content.body} onChange={handleChange} onBlur={handleBlur} rows="70" />
            </TextAreaContainer>
        </>

            
    )
}

export default TextBoxBody;

