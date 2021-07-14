import React, {useState, useContext} from 'react';
import tw from 'twin.macro'
import LinksContainer from './LinksContainer';
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { AuthContext } from '../../AuthContext';
import TextBoxBody from '../TextBoxBody';
import AuthForm from '../AuthForm';




const MainContentContainer = () => {
    const { authed, setAuthed } = useContext(AuthContext)
    const [drawerOpen, setDrawerOpen] = useState(authed);
    
    const DrawerIcon = () => {
        return (
            <div className={`text-right -mr-6 -mt-8 mb-10 `}>
                { authed && <button onClick={() => setDrawerOpen(!drawerOpen)} className={`text-4xl text-gray-800`}>{ !drawerOpen ? < BsFillCaretRightFill /> : <BsFillCaretLeftFill />}</button>}
            </div>
        )
    }

    const PlusIcon = () => {
        return (
            <div className="py-5 text-center">
                <button onClick={() => alert("bismillah")} className="text-gray-800 text-4xl"><FaPlus/></button>
            </div>
        )
    }

    return (
        <div className={`mt-10 fixed top-10 flex w-full h-screen items-stretch`}>
            <div className={` ${ drawerOpen ? "w-1/3" : "w-0"} transition-width duration-500  ease p-10  bg-gray-200 shadow-2xl border border-gray-200 flex-none`} >
                <DrawerIcon />
                {drawerOpen && <><LinksContainer /><PlusIcon /></>}
            </div>
            <div className={`w-2/3 bg-gray-100 flex-1 p-10`}>
                { authed ? <TextBoxBody /> : <AuthForm /> }
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