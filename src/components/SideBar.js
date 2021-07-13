import React from 'react';
import tw from 'twin.macro';

const OuterContainer = tw.div`relative min-h-screen flex`;
const Side = tw.div`fixed w-4/12 h-full bg-indigo-300`;

const SideBar = () => {
    return (
        <OuterContainer> 
            <Side/>
        </OuterContainer>
    )
} 
export default SideBar;