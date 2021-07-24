import React, { useState, useContext, createContext,useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import { FaPlus } from 'react-icons/fa'        
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { LinkContext } from '../../Contexts';
import LinkItem from '../LinkItem';
import RightSide from './RightSide';

export const SelectedLinkContext = createContext()
let open = true
let index = 0

const LeftSide =  () => {
    const { linksState, dispatchLinkActions } = useContext(LinkContext)
    const [ selected, setSelected] = useState(linksState.links[index]);
    const [ drawerOpen, setDrawerOpen ] = useState(open);
    const Container = styled.div( () => [ !drawerOpen ? tw`w-0`: tw`w-1/3`, 
        tw`transition-width duration-500 ease-linear p-12 bg-gray-200 border border-gray-200 flex-none shadow-2xl `,
    ]);
    useEffect(() => {
        open = drawerOpen
    },[drawerOpen])

    useEffect(() => {
        index = linksState.links.findIndex(x => x.id == selected.id) 
    },[selected])

    const onLinkSelect = (id) => {
        setSelected(linksState.links[id]);
    }

    return (
        <SelectedLinkContext.Provider value={{selected, setSelected}}>
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
            <RightSide />
        </SelectedLinkContext.Provider>

        );
    };
export default LeftSide;
    
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
