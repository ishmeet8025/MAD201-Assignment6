// MAD201 - Assignment 6
// Student: Ishmeet Singh
// Student ID: A00202436
// News Reader App - Expo + React Native

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
