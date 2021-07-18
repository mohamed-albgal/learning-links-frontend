import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { FaPlus } from 'react-icons/fa'        
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { BsFillCaretRightFill } from 'react-icons/bs'
import LinkItem from '../LinkItem';;


// takes a link object that has { id: _, title: _,} later: needs a prop handler for when the link data changes
//onLinkSelect is a function that takes an the link id as argument so the parent can show some link on the right hand side
export default ({ linkData, onLinkSelect }) => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const Container = styled.div( () => [ !drawerOpen ? tw`w-0`: tw`w-1/3`, 
            tw`transition-width duration-100 ease-linear p-12 bg-gray-200 border border-gray-200 flex-none shadow-2xl `,
        ]
    );
    const Arrow = tw.button`text-gray-800 border  border-gray-400 m-1 mr-6 shadow-md bg-gray-100 rounded-md text-4xl`
    const ArrowContainer = tw.div`text-right w-auto -mr-6 -mt-8 mb-1 hover:translate-x-6`
    const PlusContainer = tw.div`py-5 text-center`
    const IconStyle = tw.button`text-gray-800 text-4xl`
    return (
            <Container>
                <ArrowContainer>
                    <Arrow onClick={() => setDrawerOpen(!drawerOpen)}>
                        { !drawerOpen ? < BsFillCaretRightFill /> : <BsFillCaretLeftFill />}
                    </Arrow>
                </ArrowContainer>
                {drawerOpen && linkData.map(({id,title}) => <LinkItem key={id} itemKey={id} title={title} onSelect={onLinkSelect}/>)}
                <PlusContainer >
                    <IconStyle onClick={() => alert("click")} ><FaPlus/></IconStyle>
                </PlusContainer>
            </Container>
    );
};