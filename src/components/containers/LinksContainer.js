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


/**
 * 
 * query for each item for the authed user
 *  for each item, create a link item, tie to the add button 
 * 
 */