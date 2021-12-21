import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Contexts } from '../Contexts';
import { Auth } from 'aws-amplify';
import { Spinner } from './Spinner';
import VerificationForm from './Verification'
import FormElements from  './FormElements';

const { HeadLine, ClickableHeadLine, Field, Input, SubmitButton, ButtonContainer,
    Container, ErrorMessage, RedirectingLink } = FormElements;

const SignUp = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPw, setConfirmPw ] = useState("");
    const [ isLoading, setLoading] = useState(false);
    const [ isConfirming, setConfirming ] = useState(false);
    const [ error, setError] = useState("");

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
                        <VerificationForm email={email} password={password} />

                    }
                </Container>
    )
}
export default SignUp;


//malbgal+1@gmail.com
//Password123!