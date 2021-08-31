import styled from 'styled-components';

import T02Login from "../../components/template/02-login";
import O01LoginForm from "../../components/organism/01-login-form";

const StyledT02Login = styled(T02Login)`
`;
const StyledO01LoginForm = styled(O01LoginForm)`

`;
const RightSide = styled.div`
    background-image: url("https://www.canstar.com.au/wp-content/uploads/2021/03/how-to-make-a-budget-in-6-easy-steps.jpg");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: cover;
    height: 100%;
`;

const P02Login = (props) => {
    console.log('props', props);
    return (
        <StyledT02Login
            left={<StyledO01LoginForm />}
            right={<RightSide />}
        />
    );
}

export default P02Login;
