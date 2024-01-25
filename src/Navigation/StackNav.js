import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen'
import ShippingScreen from '../Screens/ShippingScreen'
import PaymentScreen from '../Screens/PaymentScreen'
import PlaceOrderScreen from '../Screens/PlaceOrderScreen'
import SingleProduct from '../Screens/SingleProduct'
const Stack = createNativeStackNavigator()


const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Shiping" component={ShippingScreen}/>
        <Stack.Screen name="Single" component={SingleProduct}/>
        <Stack.Screen name="Checkout" component={PaymentScreen}/>
        <Stack.Screen name="Place" component={PlaceOrderScreen}/>
        
    </Stack.Navigator>
  )
}

export default StackNav
