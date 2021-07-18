import React, { useContext, useState } from 'react'
import { useHistory, Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { Auth } from 'aws-amplify';
import Spinner from './Spinner';
import FormElements from './FormElements';

const { HeadLine, ClickableHeadLine, Field, Input, SubmitButton, ButtonContainer,
    Container, ErrorMessage, RedirectingLink } = FormElements

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
            <Container>
                { error.length ? <ErrorMessage>{error + ". Please try again"}</ErrorMessage> : null} 
                <form autoComplete="off" onSubmit={handleSignInSubmit}>
                    <HeadLine >Sign In&nbsp; or </HeadLine>
                    <ClickableHeadLine><RedirectingLink to="/signup" >Sign Up&nbsp;&rarr;</RedirectingLink></ClickableHeadLine>
                    <Field>Email</Field>
                    <Input required  autocomplete="off" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <Field>Password</Field>
                    <Input required minLength="8" autocomplete="off" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <ButtonContainer>
                        <SubmitButton type="submit">{!isLoading ? "Sign In" : <Spinner/>}</SubmitButton>
                    </ButtonContainer>
                </form>
            </Container>
    
    )


}

export default SignIn
//demo@user.com Demo123!