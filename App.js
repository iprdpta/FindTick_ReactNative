import React from 'react';
import 'react-native-gesture-handler';

import Home from './src/screens/Home';
import Screen from './src/screens/Screen';
import MyTickets from './src/screens/MyTickets';
import User from './src/screens/User';
import login from './src/screens/LoginRegister';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Screen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login/Register"
            component={login}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
