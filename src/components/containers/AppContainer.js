import React from 'react';
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import MainContent from './MainContentContainer';
import LinksContainer from './LinksContainer'

const AppContainer =  ({ children }) => {
    return (
        <div>
            <NavBar/>
            <SideBar >
                <LinksContainer />
            </SideBar>
            <MainContent>
                { children }
            </MainContent>
        </div>
    )
} 

export default AppContainer;


/**
 * the links container will either show stuff relevant to the current user or will not if not logged in
 * 
 * 
 */