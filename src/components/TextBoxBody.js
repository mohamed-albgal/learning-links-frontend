import React from 'react'
import tw from 'twin.macro'
import Button from './Button'

const TextAreaContainer = tw.div`mx-auto`
const TextArea = tw.textarea`mx-auto p-10 w-11/12`
const TextBoxBody = () => {
    return (
        <TextAreaContainer>            
            <TextArea rows="30">
                
            </TextArea>
        </TextAreaContainer>

            
    )
}

export default TextBoxBody;

