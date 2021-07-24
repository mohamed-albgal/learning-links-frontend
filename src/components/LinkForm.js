import React from 'react';
import tw from 'twin.macro';
import { BsCheck, BsX } from 'react-icons/bs'

const Container =  tw.div`w-full mx-3 `
const FormContainer = tw.div`p-3 bg-red-400`
const Form= tw.div`w-full p-2 bg-blue-300`
const LinkForm  = ({createAction, cancelAction}) => {
    return (
        <Container>
            <FormContainer>
                <Form>
                </Form>
            </FormContainer>
            <FormButtons create={ createAction } cancel={ cancelAction } />
        </Container>
    )
}

export default LinkForm;

const FormButtons = ({create, cancel}) => {
    return (
        <ButtonPair>
            <IconContainer>
                <CancelButton onClick={cancel}>
                    <BsX />
                </CancelButton>
            </IconContainer>
            <IconContainer>
                <CheckButton onClick={create}>
                    <BsCheck />
                </CheckButton>
            </IconContainer>
        </ButtonPair>


    )
}
const ButtonPair = tw.div`flex items-center mx-auto justify-center`
const Icon = tw.button`text-gray-800  border border-gray-100 hover:border-yellow-300 shadow-md bg-gray-100 text-4xl`
const IconContainer = tw.div`py-5 text-center`
const IconButton = tw(Icon)` p-1 mx-3 rounded-full text-3xl shadow-xl text-white`
const CheckButton = tw(IconButton)`bg-green-600 `
const CancelButton = tw(IconButton)`bg-gray-500 text-white`





//this component will either be blank to create a new link, or allow mutating existing links

