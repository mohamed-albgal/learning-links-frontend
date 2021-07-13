import React from 'react';
import tw from 'twin.macro';

const OuterContainer = tw.div`relative min-h-screen flex`;
const Side = tw.div`fixed w-4/12 h-full bg-indigo-300 shadow-2xl rounded-lg`;

const SideBar = ({ children }) => {
    return (
        <OuterContainer> 
            <Side>
                {children}
            </Side>
        </OuterContainer>
    )
} 
export default SideBar;