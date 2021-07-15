import React, {useState, useContext} from 'react';
import tw from 'twin.macro'
import LinksContainer from './LinksContainer';
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { BsFillCaretRightFill } from 'react-icons/bs'
import TextBoxBody from '../TextBoxBody';

const MainContentContainer = () => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    
    const MainContentContainer = tw.div`mt-10 fixed top-10 flex w-full h-screen items-stretch`
    const RightSide = tw.div`w-2/3 bg-gray-100 flex-1 p-10`;
    const LeftSide = tw.div` p-10  bg-gray-200 shadow-2xl border border-gray-200 flex-none`
    const IconStyle = tw.button`text-gray-800 text-4xl`
    const ArrowContainer = tw.div`text-right -mr-6 -mt-8 mb-10 `

    return (
        <MainContentContainer>
            <LeftSide className={`transition-width transition-500 ease ${ !drawerOpen ? "w-0" : "w-1/3"} `}>
                <ArrowContainer>
                    <IconStyle onClick={() => setDrawerOpen(!drawerOpen)}>
                        { !drawerOpen ? < BsFillCaretRightFill /> : <BsFillCaretLeftFill />}</IconStyle>
                </ArrowContainer>
                {drawerOpen && <LinksContainer />}
            </LeftSide>
            <RightSide>
                 <TextBoxBody />
            </RightSide>
        </MainContentContainer>
    )
}

export default MainContentContainer;


/**
 * this will need to be offset to account for the sidebar
 * this will either show the textbox or the question area
 * 
 */