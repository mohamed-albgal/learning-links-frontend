import React, { useContext, useState } from 'react';
import { LinkContext } from '../../Contexts';
import tw from 'twin.macro';
import TextBoxBody from '../TextBoxBody';

const Container = tw.div`w-2/3 bg-gray-100 flex-1 p-10`;

const RightSide =  () => {


    return (
        <Container>
            <TextBoxBody />
        </Container>
    )
}
export default RightSide;
