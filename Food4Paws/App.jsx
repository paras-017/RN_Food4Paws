import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import { AppProvider } from './context/productContext';
import ProductScreen from './Screens/ProductScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppProvider>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({})