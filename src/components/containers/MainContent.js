import React, {useState, useContext} from 'react';
import tw, { styled } from 'twin.macro'
import LinksContainer from './LinksContainer';
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { BsFillCaretRightFill } from 'react-icons/bs'
import TextBoxBody from '../TextBoxBody';

const MainContentContainer = () => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const [noteInFocus, setNoteInFocus] = useState({});
    
    const MainContentContainer = tw.div`mt-10 fixed top-10 flex w-full h-screen items-stretch`
    const RightSide = tw.div`w-2/3 bg-gray-100 flex-1 p-10`;
    const LeftSide = styled.div( () => [ !drawerOpen ? tw`w-0`: tw`w-1/3`, 
            tw`transition-width duration-100 ease-linear p-12 bg-gray-200 border border-gray-200 flex-none shadow-2xl `,
        ]
    );
    const Arrow = tw.button`text-gray-800 border  border-gray-400 m-1 mr-6 shadow-md bg-gray-100 rounded-md text-4xl`
    const ArrowContainer = tw.div`text-right w-auto -mr-6 -mt-8 mb-1 hover:translate-x-6`

    return (
        <MainContentContainer className={`${!drawerOpen ? "w-0" : "w-full"}`}>
            <LeftSide >
                <ArrowContainer>
                    <Arrow onClick={() => setDrawerOpen(!drawerOpen)}>
                        { !drawerOpen ? < BsFillCaretRightFill /> : <BsFillCaretLeftFill />}</Arrow>
                </ArrowContainer>
                {drawerOpen && <LinksContainer showNote={setNoteInFocus}/>}
            </LeftSide>
            <RightSide>
                 <TextBoxBody note={noteInFocus} />
            </RightSide>
        </MainContentContainer>
    )
}

export default MainContentContainer;
