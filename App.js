import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,TransitionPresets,CardStyleInterpolators, TransitionSpecs, HeaderStyleInterpolators  } from '@react-navigation/stack';
import HomeScreen from "./screens/homescreen";
import Second from "./screens/second";
import {Easing} from 'react-native'
import {fromLeft} from 'react-navigation-transitions'
const ani = {
    ...TransitionPresets.SlideFromRightIOS

}

const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Home' >
                <Stack.Screen  options={{
                    headerShown:false,
                }} name="Home" component={HomeScreen} />
                <Stack.Screen  options={{
                    headerShown:false,
                    ...ani
                }} name="Second" component={Second} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}




export default App;