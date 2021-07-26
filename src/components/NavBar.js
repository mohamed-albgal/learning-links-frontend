import React, { useContext } from 'react';
import tw from 'twin.macro';
import Button from './Button'
import { AuthContext } from '../Contexts';
import { Auth } from 'aws-amplify';
import {  GiQuillInk } from "react-icons/gi"

const Container = tw.div`w-full fixed h-20 top-0 px-6 pt-4  bg-gradient-to-r from-gray-900 to-purple-800  z-40`
const Content = tw.div`flex flex-row-reverse p-1`
const NavButton = tw(Button)`text-lg h-10 w-24`
const ButtonContent = tw.p`p-1`
const NameTag = tw.p`text-white p-1 mx-14 tracking-wide font-thin text-xl`
const LinkLogoContainer = tw.div` flex-none  items-start -my-1 ml-5 mr-auto `
const NavBar =  () => {
    const { authed, setAuthed } = useContext(AuthContext);
    const setLoggedIn = async () => {
        await Auth.signOut() ;
        setAuthed(null);
    }
    return (
        <Container>
            <Content>
                { authed && 
                    <NavButton onClick={ () => setLoggedIn()}>
                        <ButtonContent>Sign Out</ButtonContent>
                    </NavButton>
                }
                <NameTag>{authed?`Signed in as  ${authed['email']}`:"Sign in to begin a new learning journey"}</NameTag>
                <LinkLogoContainer>
                    <GiQuillInk className={`text-5xl text-yellow-400`}/>
                </LinkLogoContainer>
            </Content>

        </Container>
    )
} 
export default NavBar;

// https://medium.com/swlh/twin-macro-on-cra-with-react-17-e95c54f88097