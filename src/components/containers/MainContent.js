import React, {useState, useContext} from 'react';
import tw from 'twin.macro'
import LinksContainer from './LinksContainer';
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import TextBoxBody from '../TextBoxBody';
import { AuthContext } from '../../AuthContext';

const MainContentContainer = () => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    
    const DrawerIcon = () => {
        return (
            <ArrowContainer>
                 <IconStyle onClick={() => setDrawerOpen(!drawerOpen)}>
                    { !drawerOpen ? < BsFillCaretRightFill /> : <BsFillCaretLeftFill />}</IconStyle>
            </ArrowContainer>
        )
    }

    const PlusIconButton = () => (
            <PlusContainer >
                <IconStyle onClick={() => alert("bismillah")} ><FaPlus/></IconStyle>
            </PlusContainer>
    )

    const MainContentContainer = tw.div`mt-10 fixed top-10 flex w-full h-screen items-stretch`
    const RightSide = tw.div`w-2/3 bg-gray-100 flex-1 p-10`;
    const LeftSide = tw.div` p-10  bg-gray-200 shadow-2xl border border-gray-200 flex-none`
    const PlusContainer = tw.div`py-5 text-center`
    const ArrowContainer = tw.div`text-right -mr-6 -mt-8 mb-10 `
    const IconStyle = tw.button`text-gray-800 text-4xl`

    return (
        <MainContentContainer>
            <LeftSide className={` ${ drawerOpen ? "w-1/3" : "w-0"} transition-width duration-500  ease`}>
                <DrawerIcon />
                {drawerOpen && <><LinksContainer /><PlusIconButton /></>}
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