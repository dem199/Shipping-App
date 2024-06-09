import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AccountCreationScreen from '../screens/AccountCreationScreen';
import PaymentInquiryScreen from '../screens/PaymentInquiryScreen';
import TrackItemScreen from '../screens/TrackItemScreen';
import CheckItemScreen from '../screens/CheckItemScreen';

import NotFoundPage from '../screens/NotFoundPage';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AccountCreation" component={AccountCreationScreen} />
        <Stack.Screen name="PaymentInquiry" component={PaymentInquiryScreen} />
        <Stack.Screen name="TrackItem" component={TrackItemScreen} />
        <Stack.Screen name="CheckItem" component={CheckItemScreen} />
        
        <Stack.Screen name="NotFound" component={NotFoundPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
