import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import PaymentInquiryScreen from '../screens/PaymentInquiryScreen';
import TrackItemScreen from '../screens/TrackItemScreen';
import CheckItemScreen from '../screens/CheckItemScreen';
import LoginScreen from '../screens/LoginScreen';

import NotFoundPage from '../screens/NotFoundPage';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Inquire Your Yayment" component={PaymentInquiryScreen} />
        <Stack.Screen name="Track Your Item" component={TrackItemScreen} />
        <Stack.Screen name="Check Your Item" component={CheckItemScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        
        <Stack.Screen name="NotFound" component={NotFoundPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
