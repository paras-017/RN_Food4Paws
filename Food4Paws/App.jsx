import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import { AppProvider } from './context/productContext';
import ProductScreen from './Screens/ProductScreen';
import SingleProductScreen from './Screens/SingleProductScreen';
import { FilterContextProvider } from './context/FilterContext';
import { CartProvider } from './context/cartContext';
import CheckoutScreen from './Screens/CheckoutScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppProvider>
     <FilterContextProvider>
        <CartProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
              <Stack.Screen options={{headerShown:false}} name="ProductScreen" component={ProductScreen} />
              <Stack.Screen options={{headerShown:false}} name="SingleProduct" component={SingleProductScreen}/>
              <Stack.Screen options={{headerShown:false}} name='CheckoutScreen' component={CheckoutScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
    </FilterContextProvider>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({})