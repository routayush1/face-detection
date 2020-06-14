import React from 'react';
import Animation from 'lottie-react-native';
import Button from "../components/button";
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';

function HomeScreen({navigation}) {
    return (
        <Container
            colors={['#0575E6', '#021B79']}
            >


            <Animation source={require('./animation.json')} autoPlay loop />
            <Button style={{position:"absolute",bottom:10}} onPress={()=>navigation.navigate('Second')} />

        </Container>)
}

const Container = styled(LinearGradient)`
padding: 15px;
    flex: 1;
    justify-content: space-evenly;
    align-items:center;
`

const Title = styled.Text`
    font-size: 24px;
    font-weight: 500;
    color: palevioletred;
`
export default HomeScreen