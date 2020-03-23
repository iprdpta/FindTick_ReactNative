import React from 'react';
import 'react-native-gesture-handler';

import Home from './src/screens/Home';
import MyTickets from './src/screens/MyTickets';
import User from './src/screens/User';
import login from './src/screens/LoginRegister';
import Search from './src/screens/Search';

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
            component={Home}
            options={{headerShown: false, animationEnabled: false}}
          />
          <Stack.Screen
            name="Login/Register"
            component={login}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="MyTicket"
            component={MyTickets}
            options={{headerShown: false, animationEnabled: false}}
          />
          <Stack.Screen
            name="User"
            component={User}
            options={{headerShown: false, animationEnabled: false}}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{headerShown: false, animationEnabled: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
