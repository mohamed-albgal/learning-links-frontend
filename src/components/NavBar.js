import React from 'react';
import tw from 'twin.macro';

const Container = tw.div`w-full fixed top-0 h-10 bg-yellow-200 z-40`
const Content = tw.div`flex flex-row-reverse`
const NavOption = tw.p`font-serif font-semibold p-4`
const NavBar =  () => {
    return (
        <Container>
            <Content>
                    <NavOption>About</NavOption>
                    <NavOption>Home</NavOption>
                    <NavOption>SignIn</NavOption>
            </Content>

        </Container>
    )
} 
export default NavBar;

// https://medium.com/swlh/twin-macro-on-cra-with-react-17-e95c54f88097