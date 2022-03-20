import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Project} from '../screens/Project';
import {LaunchInfo} from '../screens/LaunchInfo/LaunchInfo';
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Project">
      <Stack.Screen name="Project" component={Project} />
      <Stack.Screen name="LaunchInfo" component={LaunchInfo} />
    </Stack.Navigator>
  );
}
