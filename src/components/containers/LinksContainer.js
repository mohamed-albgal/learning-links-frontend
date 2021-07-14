import React from 'react';
import tw from 'twin.macro';


const LinkItem = () => {
    return (
        <div tw="w-full bg-indigo-400 hover:scale-150 rounded-sm p-4 my-3">
        <div tw="h-10 w-full">
            Link 1
        </div>
        </div>
    )
}

const LinksContainer = ({drawerOpen}) => {
    return (
        <>
        <LinkItem />
        <LinkItem />
        <LinkItem />
        </>
    )
}

export default LinksContainer

//https://react-icons.github.io/react-icons/icons?name=ri