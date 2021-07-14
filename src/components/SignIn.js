import React, { useContext, useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { Auth } from 'aws-amplify';
import Button from './Button';
import tw from 'twin.macro';
import Spinner from './Spinner';
import { validate } from '@aws-sdk/util-arn-parser';


const SignIn = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPw, setConfirmPw ] = useState("");
    const [ verification, setVerification ] = useState("");
    const [ isLoading, setLoading] = useState("");
    const [ isConfirming, setConfirming ] = useState(false);
    const { setAuthed } = useContext(AuthContext);
    const { history }  = useHistory();

    const FormField = tw.label`text-sm block p-2 my-2 text-gray-900`
    const FormInput = tw.input`shadow bg-purple-100 appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner`;
    const SubmitButton = tw(Button)`text-lg font-thin tracking-wide h-10 w-24 mr-3`
    const ButtonContainer = tw.div`py-5 w-full my-5`
    const FormHeadLine = tw.p`tracking-wide text-2xl mt-8 mb-4 font-light text-gray-900`
    const FormContainer = tw.div`mt-40 w-2/3 bg-gray-100 p-10`;

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        console.log("signing in :", email, password)
    }

    return (
        <div className={` px-32 `}> Bismillah
        
            <FormContainer>
                <form onSubmit={handleSignInSubmit}>
                    <FormHeadLine>Sign In</FormHeadLine>
                    <FormField>Email</FormField>
                    <FormInput required  autocomplete="off" type="email" placeholder="Email" defaultValue={email} onBlur={e => setEmail(e.target.value)} />
                    <FormField>Password</FormField>
                    <FormInput required minLength="8" autocomplete="off" type="password" placeholder="Email" defaultValue={password} onBlur={e => setPassword(e.target.value)} />
                    <ButtonContainer>
                        <SubmitButton type="submit">Submit</SubmitButton>
                    </ButtonContainer>
                </form>
            </FormContainer>
        </div>
    
    )


}

export default SignIn