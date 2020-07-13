import React from 'react'
import styled from "styled-components";

const StyledContainer = styled.div((props) => ({
    maxWidth: '1400px';
}))

const Container = () => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}

export default Container
