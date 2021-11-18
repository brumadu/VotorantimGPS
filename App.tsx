import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native'
import Calcario1 from './src/components/Calcario/Calcario1';
import Coque1 from './src/components/Coque1';
import Ferro1 from './src/components/Ferro1';
import Residuos1 from './src/components/Residuos1';


const config = {
  screens: {
    Home: {
      screens: {
        Calcario1: 'calcario1',
        Coque1: 'coque1',
        Ferro1: 'ferro1',
        Residuos1: 'residuos1',
      },
    },
    Profile: 'user',
  },
};

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Calcario1">
                <Stack.Screen 
                name="Calcario1" 
                component={Calcario1}
                options={{ headerShown: false }}
                />
                <Stack.Screen 
                name="Coque1" 
                component={Coque1} 
                options={{ headerShown: false }}
                />
                <Stack.Screen 
                name="Ferro1" 
                component={Ferro1} 
                options={{ headerShown: false }}
                />
                <Stack.Screen 
                name="Residuos1" 
                component={Residuos1} 
                options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
