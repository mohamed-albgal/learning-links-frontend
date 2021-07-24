import React, { useReducer } from 'react';
import tw from 'twin.macro'
import LeftSide from './LeftSide';
import { LinkContext } from '../../Contexts';
import { linkReducer, initialLinkState } from '../../reducers/linkReducers'


const MainContent =  () => {
    //the hook will always return 2 things: the state and an action dispatcher to update the state with
    const [ linksState, dispatchLinkActions ] = useReducer(linkReducer, initialLinkState);
    const Container = tw.div`mt-10 fixed top-10 flex w-full h-screen items-stretch`
    return (
        <Container>
            <LinkContext.Provider value={{linksState, dispatchLinkActions}}>
                <LeftSide  />
            </LinkContext.Provider>
        </Container>
    )
}

export default MainContent;
//tutorial:
//https://hswolff.com/blog/how-to-usecontext-with-usereducer/
