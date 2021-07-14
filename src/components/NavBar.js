import React, { useContext } from 'react';
import tw from 'twin.macro';
import Button from './Button'
import { AuthContext } from '../AuthContext';
import { Auth } from 'aws-amplify';

const Container = tw.div`w-full fixed h-20 top-0 px-6 pt-4 bg-gray-800 z-40`
const Content = tw.div`flex flex-row-reverse p-1`
const NavButton = tw(Button)`text-lg h-10 w-24`
const ButtonContent = tw.p`p-1`
const NavBar =  () => {
    const { authed, setAuthed } = useContext(AuthContext);
    const setLoggedIn = async () => {
        await Auth.signOut() ;
        setAuthed(null);
    }
    return (
        <Container>
            <Content>
                { authed && <NavButton onClick={ () => setLoggedIn()}><ButtonContent>Sign Out</ButtonContent></NavButton>}
            </Content>

        </Container>
    )
} 
export default NavBar;

// https://medium.com/swlh/twin-macro-on-cra-with-react-17-e95c54f88097