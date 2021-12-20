import React, { useEffect, useReducer} from 'react';
import tw from 'twin.macro'
import LeftSide from './LeftSide';
import { LinkContext } from '../../Contexts';
import { linkReducer } from '../../store/reducers'

const MainContent =  (props) => {
    //the hook will always return 2 things: the state and an action dispatcher to update the state with
    const [ linksState, dispatchLinkActions ] = useReducer(linkReducer, props.links);
    const Container = tw.div`mt-10 fixed top-10 flex w-full h-screen items-stretch`

    //not exactly sure why passing in the value for the provider like this is advisable, seen on k c dodd article
    const providerValue ={linksState, dispatchLinkActions} 
    return (
        <Container>
            <LinkContext.Provider value={providerValue}>
                <LeftSide  />
            </LinkContext.Provider>
        </Container>
    )
}

export default MainContent;
//tutorial:
//https://hswolff.com/blog/how-to-usecontext-with-usereducer/
