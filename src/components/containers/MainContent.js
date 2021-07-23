import React, { useReducer } from 'react';
import tw, { styled } from 'twin.macro'
import RightSide from './RightSide'
import LeftSide from './LeftSide';
import { LinkContext } from '../../Contexts';
import { linkReducer, initialLinkState } from '../../reducers/linkReducers'


export default () => {
    //the hook will always return 2 things: the state and an action dispatcher to update the state with
    const [ linksState, dispatchLinkActions ] = useReducer(linkReducer, initialLinkState);
    const Container = tw.div`mt-10 fixed top-10 flex w-full h-screen items-stretch`
    return (
        <Container>
            <LinkContext.Provider value={{linksState, dispatchLinkActions}}>
                <LeftSide />
                <RightSide />
            </LinkContext.Provider>
        </Container>
    )
}

//tutorial:
//https://hswolff.com/blog/how-to-usecontext-with-usereducer/