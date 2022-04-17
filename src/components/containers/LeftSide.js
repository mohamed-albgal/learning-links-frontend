import React, { useState, useContext, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import { } from 'react-icons/bs'
import LinkItem from '../LinkItem';
import RightSide from './RightSide';
import { StoreContext } from '../../store/store';
import LinkForm from '../LinkForm';
import{ ArrowButton, ArrowContainer, PlusButton} from '../shared/Elements'

const LinkListContainer = tw.div` flex flex-col justify-between `

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

                    {creating ? <LinkForm saveForm={newLinkHandler} closeForm={()=> setCreating(false)}/>
                        : <PlusButton clickHandler={() => setCreating(true)} ></PlusButton>}
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



/*
 
left side creates a context that tells which of its links is currently selected ( it has a list of all links)
the rightside and any of its children components can then use this context to also know which link is selected


also when something this selected, they'll know which link it is

when they modify a link, they modify the link they have and call the callback function from here that will call the callback function of the component above (Main Content)
 */

//TODO: refactor the shit out of the index and selected logic, i hate it