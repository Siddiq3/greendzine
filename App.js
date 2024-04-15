import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './TabNavigation';
import LoginScreen from './Login';
import { StyleSheet, View } from 'react-native';

import SignupScreen from './signup';

const Stack = createStackNavigator();

export default function App() {
  return (


    <View style={styles.container}>


      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />

          <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222"

  },
});
