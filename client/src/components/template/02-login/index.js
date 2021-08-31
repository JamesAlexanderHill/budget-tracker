import styled from 'styled-components';

import { device } from '../../../util/query-helpers';
import { white } from '../../../util/palette';

const TemplateContainer = styled.div`
    min-height: 100vh;
    background-color: ${white};
    display: flex;
`;
const LeftContainer = styled.div`
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 3rem;

    @media ${device.sm} {
        padding: 1.5rem 3rem;
    }
    @media ${device.lg} {
        flex: none;
        padding: 5rem 3rem;
    }
    @media ${device.xl} {
        padding: 6rem 3rem;
    }
`;
const RightContainer = styled.div`
    display: none;
    position: relative;
    flex: 1 1 0%;
    @media ${device.lg} { 
        display: block;
    }
`;

const T02Login = (props) => {
    console.log('props', props)
    const {left, right} = props;
    return(
        <TemplateContainer>
            <LeftContainer>{left}</LeftContainer>
            <RightContainer>{right}</RightContainer>
        </TemplateContainer>
    );
}

export default T02Login