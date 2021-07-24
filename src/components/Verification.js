import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Contexts';
import { Auth } from 'aws-amplify';
import Spinner from './Spinner'
import { HeadLine, Field, Input, SubmitButton, ButtonContainer, ErrorMessage } from './FormElements';

const Verification = ({ email, password }) => {
    const [ verification, setVerification ] = useState("");
    const [ isLoading, setLoading] = useState(false)
    const [ error, setError] = useState("");
    const { setAuthed } = useContext(AuthContext);
    const history = useHistory();

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
        { (error && error.length) && <ErrorMessage>{error + " Please try again"}</ErrorMessage> }
            <form autoComplete="off" onSubmit={handleVerificationSubmit}>
                <HeadLine>{`Enter the Verification Code send to ${email}`} </HeadLine>
                <Field>Verification Code</Field>
                <Input required  autocomplete="off" type="text" placeholder="Verification Code"  value={verification}  onChange={e => setVerification(e.target.value)}/>
                <ButtonContainer>
                    <SubmitButton  type="submit">{!isLoading ? "Verify" : <Spinner/>}</SubmitButton>
                </ButtonContainer>
            </form>
        </>
    )
}
export default Verification;