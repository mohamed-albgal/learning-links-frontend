import React, { useContext, useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import Notes from '../Notes';
import Questions from '../Questions'
import Pictures from '../Pictures'


import { StoreContext } from '../../store/store';
import Button from '../Button';
const Container = tw.div`w-2/3 bg-gray-100 relative flex-1 p-10`;
const TabBar = tw.div`flex  w-1/2  mb-10  justify-between self-center`
const TabButton = tw.button`bg-purple-100 border border-purple-300  h-10 rounded-full mx-1 w-10/12 `
const FocusedTabButton = tw.button`bg-purple-900  text-purple-50 mx-1  border border-black h-10 rounded-full w-10/12 shadow-lg`

const RightSide =  () => {
    const { state, actions } = useContext(StoreContext)
    const [ tabInFocus, setTabInFocus] = useState(0);

    const makeTabs = () => {
        return( ["Notes", "Questions", "Pictures"].map((tabName,i) =>{
            let ButtonType = tabInFocus === i ? FocusedTabButton : TabButton 
            return <ButtonType onClick={() => setTabInFocus(i)} >{tabName}</ButtonType>
        }));
    }

    return (
        <>
        { state.selected && <Container>
            <TabBar>
                {makeTabs()}
            </TabBar>
            {tabInFocus === 0 &&  <Notes />}
            {tabInFocus === 1 &&  <Questions />}
            {tabInFocus === 2 &&  <Pictures/>}
        </Container>}
        </>
    )
}
export default RightSide;
