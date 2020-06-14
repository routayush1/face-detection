import React from 'react';
import Animation from 'lottie-react-native';

import styled from 'styled-components/native'

function Second() {
    return (
        <Container >
            <Title>second screen</Title>
            <Animation source={require('./animation.json')} autoPlay loop />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: #345;
    justify-content: space-evenly;
    align-items:center;
`

const Title = styled.Text`
    font-size: 24px;
    font-weight: 500;
    color: palevioletred;
`
export default Second