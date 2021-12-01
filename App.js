import React from 'react';
import type Node from 'react';
import Home from './component/home';
import Details from './component/details';
import Help from './component/help';
import End from './component/end';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import linking from './component/linkingConfig';

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="End" component={End} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
