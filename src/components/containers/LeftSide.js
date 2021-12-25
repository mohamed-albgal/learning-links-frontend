import React, { useState, useContext, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import { FaPlus } from 'react-icons/fa'        
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import { } from 'react-icons/bs'
import LinkItem from '../LinkItem';
import RightSide from './RightSide';
import { StoreContext } from '../../store/store';
import LinkForm from '../LinkForm';

let open = true
const LeftSide =  () => {
    const { state, actions} = useContext(StoreContext);
    const [ drawerOpen, setDrawerOpen ] = useState(open);
    const [ creating, setCreating] = useState(false);

    useEffect(() => open = drawerOpen,[drawerOpen])

    const newLinkHandler = (data) => {
        actions.create(data);
        setCreating(false);
    }
    return (
        <>
            <Container open={drawerOpen }>
                <ArrowContainer>
                    <ArrowButton onClick={() => setDrawerOpen(!drawerOpen)}>
                        { drawerOpen ? <BsFillCaretLeftFill />:< BsFillCaretRightFill />}
                    </ArrowButton>
                </ArrowContainer>
                {drawerOpen && state.links && 
                <> <LinkListContainer>
                    {Object.keys(state?.links).map(linkId => <LinkItem key={linkId} link={state.links[linkId]}/>)}
                    </LinkListContainer>

                    {creating ? <LinkForm saveForm={newLinkHandler} closeForm={()=> setCreating(false)}   />
                    : <PlusContainer >
                        <PlusButton onClick={() => setCreating(true)}>
                            <FaPlus/>
                        </PlusButton>
                    </PlusContainer> }
                </>}
            </Container>
            <RightSide />
        </>

        );
    };
export default LeftSide;
    
const Container = styled.div( ({open}) =>[ !open ? tw`w-0`: tw`w-1/3`, 
    tw`transition-width duration-700 ease-in-out p-12 bg-gray-200 border border-gray-200 overflow-scroll flex-none shadow-2xl `,
]);
const LinkListContainer = tw.div` flex flex-col justify-between `
const Icon = tw.button`text-gray-800  border border-gray-100 hover:border-yellow-300 shadow-md bg-gray-100 text-4xl`
const ArrowButton = tw(Icon)`m-1 mr-6 rounded-md `
const ArrowContainer = tw.div`text-right w-auto -mr-6 -mt-8 mb-1`
const PlusContainer = tw.div`py-5 text-center`
const PlusButton = tw(Icon)`text-gray-800 p-1 rounded-full text-3xl`


/*
 
left side creates a context that tells which of its links is currently selected ( it has a list of all links)
the rightside and any of its children components can then use this context to also know which link is selected


also when something this selected, they'll know which link it is

when they modify a link, they modify the link they have and call the callback function from here that will call the callback function of the component above (Main Content)
 */

//TODO: refactor the shit out of the index and selected logic, i hate it