import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.columned ? "column" : "row"};
`;
const TextLabel = styled.label``;
const TextInput = styled.input``;

const M01LabeledInput = ({
    label,
    slug,
    type,
    autocomplete,
    required,
    columned,
}) => {
    return (
        <StyledWrapper columned={columned}>
            <TextLabel for={slug}>{label}</TextLabel>
            <TextInput id={slug} name={slug} type={type} autocomplete={autocomplete} required={required}/>
        </StyledWrapper>
    );
}

export default M01LabeledInput;