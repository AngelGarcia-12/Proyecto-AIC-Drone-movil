import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInForm from './View/LogInForm'
import RegisterForm from './View/RegisterForm';
import ControlsDron from './Controller/ControlsDron';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Log in' component={LogInForm}></Stack.Screen>
                <Stack.Screen name='Controls Dron' component={ControlsDron}></Stack.Screen>
                <Stack.Screen name='Register Form' component={RegisterForm}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;