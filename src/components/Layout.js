import React from 'react';
import NavBar from './NavBar'
import SideBar from './SideBar'
import MainContent from './MainContent';
import LinksContainer from './LinksContainer'

const Layout =  ({ children }) => {
    return (
        <div>
            <NavBar/>
                <p>Bismillah from the layout</p>
            <SideBar >
                <LinksContainer />
            </SideBar>
            <MainContent>
                { children }
            </MainContent>
        </div>
    )
} 

export default Layout