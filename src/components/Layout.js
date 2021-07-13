import React from 'react';
import NavBar from './NavBar'
import SideBar from './SideBar'
import MainContent from './MainContent';

// this component will be my layout of navbar + sidebar + footer

const Layout =  ({ children }) => {
    return (
        <div>
            <NavBar/>
                <p>Bismillah from the layout</p>
            <SideBar />
            <MainContent>
                { children }
            </MainContent>
        </div>
    )
} 


export default Layout