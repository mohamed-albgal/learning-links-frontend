import React, { useState, useContext, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import { FaPlus } from 'react-icons/fa'        
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import { } from 'react-icons/bs'
import { LinkContext, SelectedLinkContext } from '../../Contexts';
import LinkItem from '../LinkItem';
import RightSide from './RightSide';

let open = true
let index =-1 
const Container = styled.div( ({open}) =>[ !open ? tw`w-0`: tw`w-1/3`, 
    tw`transition-width duration-700 ease-in-out p-12 bg-gray-200 border border-gray-200 overflow-scroll flex-none shadow-2xl `,
]);
const LeftSide =  () => {
    const { linksState, dispatchLinkActions } = useContext(LinkContext)
    /**
     *todo:
        left off here:
            the creating state is for creating a new link,
            click the plus button changes this state to true (creating) 
            then this will render a dummy LinkItem with no 'link' prop causing its editing state to be true,
            then once teh new link is filled out, some 'add' button will cause the newly created link to be inserted into teh linksState
            links bundle, causing everything to rerender (?) or at least just this component so that the map from links to linkItems will include the newly created link
            
     * 
     * 
     */
    const [ selected, setSelected] = useState(linksState?.links[index] || linksState?.links[0]);
    const [ drawerOpen, setDrawerOpen ] = useState(open);

    useEffect(() => open = drawerOpen,[drawerOpen])
    useEffect(() => index = linksState?.links.findIndex(x => x.source === selected.source),[selected, linksState?.links])
    const createNew = () => {
        let link =   {
            topic: "tech",
            title: "Still working for some reason!",
            linkNotes: " I know I can be better,\n I just have to remain focused and stay to the course!",
            source: "https://www.3codecademy.com/",
            goals: 20,
            completedGoals: 12, 
            questions: {0:{"Some Question":"Some answer"}, 1:{"other question":"other answer"}}
        }
        dispatchLinkActions({type:"newLinkItem", payload:{ link }})
    }

    const providerValue = {selected, setSelected}
    return (
        <SelectedLinkContext.Provider value={providerValue}>
            <Container open={drawerOpen }>
                <ArrowContainer>
                    <ArrowButton onClick={() => setDrawerOpen(!drawerOpen)}>
                        { drawerOpen ? <BsFillCaretLeftFill />:< BsFillCaretRightFill />}
                    </ArrowButton>
                </ArrowContainer>
                {drawerOpen && 
                <> <LinkListContainer>
                        {linksState?.links.sort((a,b) => a.priotity > b.priotity).map(link => <LinkItem key={link.id} link={link}/>)}
                    </LinkListContainer>

                    <PlusContainer >
                        <PlusButton onClick={createNew}>
                            <FaPlus/>
                        </PlusButton>
                    </PlusContainer>
                </>}
            </Container>
            <RightSide />
        </SelectedLinkContext.Provider>

        );
    };
export default LeftSide;
    

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
