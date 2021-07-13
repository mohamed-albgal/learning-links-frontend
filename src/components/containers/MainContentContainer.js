import React from 'react';

// this will be the area that hold the main viewable/editable content
const MainContentContainer = () => {
    return (
        <div className="bg-yellow-300">
            <div>
                text editor goes here
            </div>
        </div>
    )
}


export default MainContentContainer;


/**
 * this will need to be offset to account for the sidebar
 * this will either show the textbox or the question area
 * 
 */