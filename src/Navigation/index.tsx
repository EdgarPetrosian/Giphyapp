import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppTabNavigator from './navigators/AppTabNavigator';

export default () => (
  <NavigationContainer>
    <AppTabNavigator />
  </NavigationContainer>
);
