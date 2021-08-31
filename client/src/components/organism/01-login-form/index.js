import {
    useHistory,
    useLocation,
    Link,
} from "react-router-dom";
import styled from "styled-components";
import { rgba, darken } from "polished";

import { useAuth } from "../../../state/auth";

import { white, black } from "../../../util/palette";

import A01Logo from "../../atom/01-logo";
import M01LabeledInput from "../../molecule/01-labeled-input";

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const CheckboxContainer = styled.div`
    margin-top: 1.5rem;

`;
const CheckboxLabel = styled.label``;
const CheckboxInput = styled.input``;
const SignInBtn = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 0.5rem;
    border: 2px solid ${white};
    border-radius: .375rem;
    box-shadow: 0 1px 2px 0 ${rgba(black, 0.05)};
    color: ${white};
    background-color: ${props => props.theme.primary};
    cursor: pointer;
    margin-top: 1.5rem;


    &:hover{
        background-color: ${props => darken(0.05, props.theme.primary)};
    }
    &:focus{
        box-shadow: 0 0 0 2px ${props => darken(0.05, props.theme.primary)};
    }
`;

const O01LoginForm = () => {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
    let { from } = location.state || { from: { pathname: "/" } };

    let login = () => {
        auth.signin(() => {
        history.replace(from);
        });
    };

    return(
        <main>
            <header>
                <A01Logo />
                <h1>Sign in to your account</h1>
                <p>Or start your 14-day free trial</p>
            </header>
            <form onSubmit={login}>
                <M01LabeledInput
                    label="email"
                    slug="email"
                    type="email"
                    autocomplete="email"
                    required
                    columned
                />
                <M01LabeledInput
                    label="password"
                    slug="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    columned
                />
                <FooterContainer>
                    <CheckboxContainer>
                        <CheckboxInput id="remember-me" name="remember-me" type="checkbox" />
                        <CheckboxLabel for="remember-me">Remember me?</CheckboxLabel>
                    </CheckboxContainer>
                    <div><Link>Forgot your password?</Link></div>
                </FooterContainer>
                <SignInBtn type="submit">Sign in</SignInBtn>
            </form>
        </main>
        
    );
}
export default O01LoginForm;