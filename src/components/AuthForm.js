import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { Auth } from 'aws-amplify';
import Button from './Button';
import tw from 'twin.macro';
import FormHeadLine from './FormHeadLine';
import Spinner from './Spinner';


const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [isSigningUp, setSigningUp] = useState(true);
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");
    const [ verification, setVerification ] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [isConfirming, setConfirming] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState("");
    const [errorState, setErrorState] = useState(false);
    const { setAuthed } = useContext(AuthContext);
    const { history } = useHistory();
    
    const handleSignUp = async (e) => {
        e.preventDefault();
        // setLoading(true);
        console.log("handling signup method")
    //     try {
    //         if (password != confirmPw){
    //             throw new Error("The passwords don't match");
    //         }
    //         await Auth.signUp({username:email, password: password});
    //         setLoading(false);
    //         setConfirming(true);
    //         setSigningUp(false);
    //         setErrorMessage("");
    //         setErrorState(false);
    //     }catch(e) {
    //         console.log(e.message);
    //         console.log("error handling sign up button");
    //         setLoading(false);
    //     }
        
    }
    const handleSignIn = async (e) => {
        e.preventDefault();
        //     setLoading(true);
        console.log("handling signin");
        console.log(password)
        console.log(email)
        // try {
        //     await Auth.signIn(email, password);
        //     const user = await Auth.currentUserInfo();
        //     setAuthed({id:user.id, username:user.username, email: user.attributes.email});
        //     setLoading(false);
        //     setErrorState(false);
        //     history.push('/');
        // }catch(e){
        //     setLoading("");
        //     setErrorState(true);
        //     setErrorMessage(e.message);
        // }
    }

    const handleConfirm = async (e) => {
        e.preventDefault();
        console.log("handling signIN method");
        // setLoading(true);
        // try {
        //     await Auth.confirmSignUp(email, verification)
        //     const user = await Auth.currentUserInfo();
        //     console.log("LOGGED IN:");
        //     console.log(user);
        //     setAuthed({id:user.id, username:user.username, email:user.attributes.email})
        //     setLoading(false);
        //     history.push('/');
        // }catch(e){
        //     setLoading(false);
        //     setErrorState(true);
        //     setErrorMessage(e.message);
        // }
    }
    const SubmitButton = tw(Button)`text-lg font-thin tracking-wide h-10 w-24 mr-3`
    const ButtonContainer = tw.div`py-5 w-full my-5`;
    const FormField = tw.p`text-sm p-2 my-2 text-gray-900`

    const HeadLineText = () => {
        return (
            <div>
                { !isConfirming ? 
                <>
                    <FormHeadLine tw="inline-block">{isSigningUp ? "Sign Up" : "Sign In"}</FormHeadLine>
                    <FormHeadLine tw="m-0 inline-block ml-2 ">or<button tw=" inline-block ml-3 tracking-wide text-purple-600 " onClick={() => setSigningUp(!isSigningUp)}>{isSigningUp ? "   Sign In  " : "  Sign Up  " }</button></FormHeadLine>
                </>
                    :
                    <FormHeadLine>Confirm Your Email</FormHeadLine>
                }
            </div> 
        )
    }

    const handleEmailInputChange = e => setEmail(e.target.value);
    const handlePwInputChange = e => setPassword(e.target.value);
    const handlePwConfirmInputChange = e => setConfirmPw(e.target.value);
    const handleVerificationChange = e => setVerification(e.target.value);

    const ConditionalButtonContent = () => {
        return (
            isLoading ? <Spinner /> :
            isConfirming ? "Confirm" :
            isSigningUp ? "Register"  : "Log In"
        )
    }
    const ConditionalFields = () => {
        return (
            <>
                {!isConfirming ? <> 
                    <FormField>Email</FormField>
                    <FormInput required minLength="8" autocomplete="new-password" type="email" placeholder="Email"  defaultValue={email}  onBlur={handleEmailInputChange}/>
                    <FormField>Password</FormField>
                    <FormInput required minLength="8" autocomplete="new-password" type="password" placeholder="Password"  defaultValue={password}  onBlur={handlePwInputChange} />
                    { isSigningUp && <>
                        <FormField>Confirm Password</FormField>
                        <FormInput required minLength="8" autocomplete="new-password" type="text"  placeholder="Confirm Password" defaultValue={confirmPw}  onBlur={handlePwConfirmInputChange}></FormInput>
                    </> }
                </> :
                <>
                    <FormField>Verification Code</FormField>
                    <FormInput required type="text" autocomplete="new-password" defaultValue={verification}  onBlur={handleVerificationChange}/>
                </>
                }
            </>
        )
    }
    const FormInput = tw.input`shadow bg-purple-100 appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner`
    return(
        <div className={` px-32`}>
            <HeadLineText />
            <form>
                <ConditionalFields />
                <ButtonContainer>
                    <SubmitButton  type="button" onClick={(e) => isConfirming ? handleConfirm(e) : isSigningUp ? handleSignUp : handleSignIn(e)}>
                        <ConditionalButtonContent />
                    </SubmitButton>
                </ButtonContainer>
            </form>
        </div>
    )
}
export default AuthForm;
