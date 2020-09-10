import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const HomeStack = createStackNavigator();

export default function HomeRoutes() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  )
};
