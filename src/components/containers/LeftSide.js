import React, { useState, useContext, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import { FaPlus } from 'react-icons/fa'        
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { LinkContext } from '../../Contexts';
import LinkItem from '../LinkItem';
;

const LeftSide =  () => {
    const { linksState, dispatchLinkActions } = useContext(LinkContext);
    const [ drawerOpen, setDrawerOpen ] = useState(true);
    const Container = styled.div( () => [ !drawerOpen ? tw`w-0`: tw`w-1/3`, 
        tw`transition-width duration-500 ease-linear p-12 bg-gray-200 border border-gray-200 flex-none shadow-2xl `,
    ]);
    // useEffect(() => {
    //     console.log("from leftside: ", linksState.displayed)

    // },[linksState])

    const onLinkSelect = (id) => {
        dispatchLinkActions({type:"displayLink", payload: { id }})
    }

    return (
        <Container>
            <ArrowContainer>
                <ArrowButton onClick={() => setDrawerOpen(!drawerOpen)}>
                    { !drawerOpen ? < BsFillCaretRightFill /> : <BsFillCaretLeftFill />}
                </ArrowButton>
            </ArrowContainer>
            { drawerOpen &&  linksState.links.map(({id,title}) => <LinkItem key={id} itemKey={id} title={title} onSelect={onLinkSelect}/>)}
            <PlusContainer >
                <PlusButton onClick={() => alert("click")} ><FaPlus/></PlusButton>
            </PlusContainer>
        </Container>
        );
    };
export default LeftSide;
    
const Icon = tw.button`text-gray-800  border border-gray-100 hover:border-yellow-300 shadow-md bg-gray-100 text-4xl`
const ArrowButton = tw(Icon)`m-1 mr-6 rounded-md `
const ArrowContainer = tw.div`text-right w-auto -mr-6 -mt-8 mb-1`
const PlusContainer = tw.div`py-5 text-center`
const PlusButton = tw(Icon)`text-gray-800 p-1 rounded-full text-3xl`


/*
 gets links and dispatch function.
 
 dispatch function lets us say: dispatch({action: "", payload: {}})
 */
