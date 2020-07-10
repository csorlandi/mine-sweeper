import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}
