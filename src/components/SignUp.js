import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { Auth } from 'aws-amplify';
import Button from './Button';
import tw from 'twin.macro';
import Spinner from './Spinner';

const FormField = tw.label`text-sm block p-2 my-2 text-gray-900`
const FormInput = tw.input`shadow bg-purple-100 appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner`;
const SubmitButton = tw(Button)`text-lg font-thin tracking-wide h-10 w-24 mr-3`
const ButtonContainer = tw.div`py-5 w-full my-5`
const FormHeadLine = tw.p`tracking-wide text-2xl mt-8 mb-4 font-light text-gray-900`
const ClickableHeadLine = tw(FormHeadLine)`ml-2 font-semibold`
const FormContainer = tw.div`mt-40 max-w-xl mx-auto bg-gray-100 p-10`;
const ErrorMessage = tw.p`px-10 text-red-400 p-0`

const SignUp = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPw, setConfirmPw ] = useState("");
    const [ verification, setVerification ] = useState("");
    const [ isLoading, setLoading] = useState(false);
    const [ isConfirming, setConfirming ] = useState(false);
    const [ error, setError] = useState("");
    const { setAuthed } = useContext(AuthContext);
    const history = useHistory();
    
    const handleSignUpSubmit = async e => {
        e.preventDefault()
        setLoading(true);
        try {
            if (password != confirmPw){
                throw new Error("The passwords don't match");
            }
            await Auth.signUp({ username: email, password: password});
            setLoading(false);
            setError("");
            setConfirming(true);
        }catch(e) {
            setLoading(false);
            setError(e.message);
        }
    }
    const handleVerificationSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        try {
            await Auth.confirmSignUp(email, verification)
            await Auth.signIn(email,password);
            const user = await Auth.currentUserInfo();
            setAuthed({id:user.id, username:user.username, email:user.attributes.email})
            setLoading(false);
            history.push('/');
        }catch(e){
            setLoading(false);
            setError(e.message);
        }
    }
    

    return (
        <>
            <div className={` px-32 `}>
                <FormContainer>
                { (error && error.length) && <ErrorMessage>{error + " Please try again"}</ErrorMessage> }
                    {
                        !isConfirming ?
                        <form onSubmit={handleSignUpSubmit} autoComplete="off">
                            <FormHeadLine tw="inline-block">Sign Up</FormHeadLine>
                            <ClickableHeadLine tw="inline-block ml-2 font-semibold ">or<Link to="/SignIn" tw=" inline-block ml-3 tracking-wide text-purple-600 " >Sign In</Link></ClickableHeadLine>
                            <FormField>Email</FormField>
                            <FormInput required  autocomplete="off" type="email" placeholder="Email"  value={email}  onChange={e => setEmail(e.target.value)}/>
                            <FormField>Password</FormField>
                            <FormInput required minLength="8" autocomplete="off" type="password" placeholder="Password"  value={password}  onChange={e =>setPassword(e.target.value)} />
                            <FormField>Confirm Password</FormField>
                            <FormInput required minLength="8" autocomplete="off" type="password"  placeholder="Confirm Password" value={confirmPw}  onChange={e => setConfirmPw(e.target.value)} />
                            <ButtonContainer>
                                <SubmitButton  type="submit">{!isLoading ? "Submit" : <Spinner/>}</SubmitButton>
                            </ButtonContainer>
                        </form> :
                        <form autoComplete="off" onSubmit={handleVerificationSubmit}>
                            <FormHeadLine>{`Enter the Verification Code send to ${email}`} </FormHeadLine>
                            <FormField>Verification Code</FormField>
                            <FormInput required minLength="8" autocomplete="off" type="text" placeholder="Verification Code"  value={verification}  onChange={e => setVerification(e.target.value)}/>
                            <ButtonContainer>
                                <SubmitButton  type="submit">{!isLoading ? "Verify" : <Spinner/>}</SubmitButton>
                            </ButtonContainer>
                        </form>
                    }
                </FormContainer>
            </div>
        </>
    )


}
export default SignUp;


//malbgal+1@gmail.com
//Password123!