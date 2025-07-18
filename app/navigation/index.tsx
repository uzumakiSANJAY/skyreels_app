import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { RootStackParamList } from './types';
import BookingScreen from '../screens/BookingScreen';
import MenuScreen from '../screens/MenuScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="BookNow" component={BookingScreen} />
      <Stack.Screen name="Menus" component={MenuScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;