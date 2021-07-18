import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { Auth } from 'aws-amplify';
import Spinner from './Spinner';
import FormElements from  './FormElements';

const { HeadLine, ClickableHeadLine, Field, Input, SubmitButton, ButtonContainer,
    Container, ErrorMessage, RedirectingLink } = FormElements;

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
                <Container>
                { (error && error.length) && <ErrorMessage>{error + " Please try again"}</ErrorMessage> }
                    {
                        !isConfirming ?
                        <form onSubmit={handleSignUpSubmit} autoComplete="off">
                            <HeadLine >Sign Up&nbsp; or</HeadLine>
                            <ClickableHeadLine ><RedirectingLink to="/SignIn" >Sign In &rarr;</RedirectingLink></ClickableHeadLine>
                            <Field>Email</Field>
                            <Input required  autocomplete="off" type="email" placeholder="Email"  value={email}  onChange={e => setEmail(e.target.value)}/>
                            <Field>Password</Field>
                            <Input required minLength="8" autocomplete="off" type="password" placeholder="Password"  value={password}  onChange={e =>setPassword(e.target.value)} />
                            <Field>Confirm Password</Field>
                            <Input required minLength="8" autocomplete="off" type="password"  placeholder="Confirm Password" value={confirmPw}  onChange={e => setConfirmPw(e.target.value)} />
                            <ButtonContainer>
                                <SubmitButton  type="submit">{!isLoading ? "Submit" : <Spinner/>}</SubmitButton>
                            </ButtonContainer>
                        </form> :
                        <form autoComplete="off" onSubmit={handleVerificationSubmit}>
                            <HeadLine>{`Enter the Verification Code send to ${email}`} </HeadLine>
                            <Field>Verification Code</Field>
                            <Input required minLength="8" autocomplete="off" type="text" placeholder="Verification Code"  value={verification}  onChange={e => setVerification(e.target.value)}/>
                            <ButtonContainer>
                                <SubmitButton  type="submit">{!isLoading ? "Verify" : <Spinner/>}</SubmitButton>
                            </ButtonContainer>
                        </form>
                    }
                </Container>
    )
}
export default SignUp;


//malbgal+1@gmail.com
//Password123!