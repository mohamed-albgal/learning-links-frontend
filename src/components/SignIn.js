import React, { useContext, useState } from 'react'
import { useHistory, Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { Auth } from 'aws-amplify';
import Button from './Button';
import tw from 'twin.macro';
import Spinner from './Spinner';

const FormField = tw.label`text-sm block p-2 my-2 text-gray-900`
const FormInput = tw.input`shadow bg-purple-100 appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner`;
const SubmitButton = tw(Button)`text-lg font-thin tracking-wide h-10 w-24 mr-3`
const ButtonContainer = tw.div`py-5 w-full my-5`
const FormHeadLine = tw.p`inline-block  tracking-wide text-2xl mt-8 mb-4 font-light text-gray-900`
const ClickableHeadLine = tw(FormHeadLine)`ml-2 font-semibold`
const FormContainer = tw.div`mt-40 w-2/3 bg-gray-100 p-10`;
const ErrorMessage = tw.p`px-10 text-red-400 p-0`

const SignIn = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isLoading, setLoading] = useState(false);
    const [ error, setError ] = useState("");
    const { setAuthed } = useContext(AuthContext);
    const history = useHistory();


    const handleSignInSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        try {
            await Auth.signIn(email, password);
            const user = await Auth.currentUserInfo();
            setAuthed({id:user.id, username:user.username, email: user.attributes.email});
            setLoading(false);
            setError("");
            history.push('/');
        }catch(e){
            setLoading(false);
            setError(e.message);
        }
    }

    return (
        <div className={` px-32 `}>
            <FormContainer>
                { error.length ? <ErrorMessage>{error + ". Please try again"}</ErrorMessage> : null} 
                <form autoComplete="off" onSubmit={handleSignInSubmit}>
                    <FormHeadLine >Sign In </FormHeadLine>
                    <ClickableHeadLine>or<Link to="/signup" tw=" inline-block ml-3 tracking-wide text-purple-600 " >Sign Up</Link></ClickableHeadLine>
                    <FormField>Email</FormField>
                    <FormInput required  autocomplete="off" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <FormField>Password</FormField>
                    <FormInput required minLength="8" autocomplete="off" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <ButtonContainer>
                        <SubmitButton type="submit">{!isLoading ? "Sign In" : <Spinner/>}</SubmitButton>
                    </ButtonContainer>
                </form>
            </FormContainer>
        </div>
    
    )


}

export default SignIn
//demo@user.com Demo123!