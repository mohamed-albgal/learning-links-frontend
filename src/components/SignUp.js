import React, { useContext, useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { Auth } from 'aws-amplify';
import Button from './Button';
import tw from 'twin.macro';
import Spinner from './Spinner';
import { validate } from '@aws-sdk/util-arn-parser';


const SignUp = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPw, setConfirmPw ] = useState("");
    const [verification, setVerification ] = useState("");
    const [ isLoading, setLoading] = useState("");
    const [ isConfirming, setConfirming ] = useState(false);
    const { setAuthed } = useContext(AuthContext);
    const { history }  = useHistory();
    
    const handleEmailInputChange = e => setEmail(e.target.value);
    const handlePwInputChange = e => setPassword(e.target.value);
    const handlePwConfirmInputChange = e => setConfirmPw(e.target.value);
    const handleVerification = e => setVerification(e.target.value);
    const handleVerificationSubmit = e => {
        //before sending home, log them in
        history.push('/');
    }
    const handleSignUpSubmit = e => {
        console.log("signing up:", email, password, confirmPw);
        setConfirming(true);
    }

    const FormField = tw.label`text-sm block p-2 my-2 text-gray-900`
    const FormInput = tw.input`shadow bg-purple-100 appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner`;
    const SubmitButton = tw(Button)`text-lg font-thin tracking-wide h-10 w-24 mr-3`
    const ButtonContainer = tw.div`py-5 w-full my-5`
    const FormHeadLine = tw.p`tracking-wide text-2xl mt-8 mb-4 font-light text-gray-900`
    const FormContainer = tw.div`mt-40 w-2/3 bg-gray-100 p-10`;
    return (
        <>
            <div className={` px-32 `}>
                <FormContainer>
                    {
                        !isConfirming ?
                        <form onSubmit={handleSignUpSubmit}>
                            <FormHeadLine tw="inline-block">Sign Up</FormHeadLine>
                            <FormHeadLine tw="inline-block ml-2 ">or<Link to="/SignIn" tw=" inline-block ml-3 tracking-wide text-purple-600 " >Sign In</Link></FormHeadLine>
                            <FormField>Email</FormField>
                            <FormInput required  autocomplete="new-password" type="email" placeholder="Email"  defaultValue={email}  onBlur={handleEmailInputChange}/>
                            <FormField>Password</FormField>
                            <FormInput required minLength="8" autocomplete="new-password" type="password" placeholder="Password"  defaultValue={password}  onBlur={handlePwInputChange} />
                            <FormField>Confirm Password</FormField>
                            <FormInput required minLength="8" autocomplete="new-password" type="text"  placeholder="Confirm Password" defaultValue={confirmPw}  onBlur={handlePwConfirmInputChange}></FormInput>
                            <ButtonContainer>
                                <SubmitButton  type="submit">Submit</SubmitButton>
                            </ButtonContainer>
                        </form> :
                        <form onSubmit={handleVerificationSubmit}>
                            <FormHeadLine>{`Enter the verification Code send to ${email}`} </FormHeadLine>
                            <FormField>Validation Code</FormField>
                            <FormInput required minLength="8" autocomplete="new-password" type="text" placeholder="Verification Code"  defaultValue={verification}  onBlur={handleVerification}/>
                            <ButtonContainer>
                                <SubmitButton  type="submit">Verify</SubmitButton>
                            </ButtonContainer>
                        </form>
                    }
                </FormContainer>


            </div>
        </>
    )


}
export default SignUp;