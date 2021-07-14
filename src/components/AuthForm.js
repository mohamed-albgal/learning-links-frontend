import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Auth } from 'aws-amplify';
import Button from './Button';
import tw from 'twin.macro';
import { FaBrain } from 'react-icons/fa';

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [threeFields, setThreeFields] = useState(true);
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");
    const [isLoading, setLoading] = useState(false);
    const { setLoggedIn } = useContext(AuthContext);
    
    const SubmitButton = tw(Button)`text-lg font-thin tracking-wide h-10 w-24 mr-3`
    const FormField = tw.p`text-sm p-2 my-2 text-gray-900`
    const FormHeadLine = tw.p`tracking-wide text-2xl mt-8 mb-4 font-light text-gray-900`
    const HeadLineText = () => {
        return (
            <div>
                <FormHeadLine tw="inline-block">{threeFields ? "Sign Up" : "Sign In"}</FormHeadLine>
                <FormHeadLine tw="m-0 inline-block ml-2 ">or<button tw=" inline-block ml-3 tracking-wide text-purple-600 " onClick={() => setThreeFields(!threeFields)}>{threeFields ? "   Sign In  " : "  Sign Up  " }</button></FormHeadLine>
            </div> 
        )
    }

    const handleSignUp = () => {
        //sign in the user with auth
        //if successful return: use the authed hook
        alert("signup")
    }
    const handleSignIn = () => {
        //sign in the user with auth
        //if successful return: use the authed hook
        alert("signin")
    }

    const Spinner = () => {
        return (
            <div class=" flex justify-center items-center ">
                <div class="animate-spin rounded-full h-8 w-7 border-t-2 border-b-2 border-purple-100 "></div>
            </div>
        )
    }
    const ConditionalButtonContent = () => {
        return (
            isLoading ? <Spinner /> :
            threeFields ? "Register"  : "Log In"
        )
    }
    const FormInput = tw.input`shadow bg-purple-100 appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner`
    return(
        <div className={` px-32`}>
            <HeadLineText />
            <form className={``}>
                <FormField>Email</FormField>
                <FormInput required minLength="8" type="text" placeholder="Email" autoComplete="username" onChange={ e => setEmail(e.target.value)}></FormInput>
                <FormField>Password</FormField>
                <FormInput required minLength="8" type="text" placeholder="Password" autoComplete="password" onChange={ e => setPassword(e.target.value)}></FormInput>
                { threeFields && <>
                    <FormField>Confirm Password</FormField>
                    <FormInput required minLength="8" type="text" autoComplete="password" placeholder="Confirm Password" onChange={ e => setConfirmPw(e.target.value)}></FormInput>
                </>
                }
                <div className={`py-5 w-full my-5`}>
                    <SubmitButton  onClick={() => threeFields ? handleSignUp() : handleSignIn()}>
                        <ConditionalButtonContent />
                    </SubmitButton>
                </div>
            </form>
        </div>
    )
}

export default AuthForm;






