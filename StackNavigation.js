


import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Profile from "./Profile";
import Dashboard from "./Home";






const Stack = createNativeStackNavigator();

const MainStackNavigator1 = () => {




    return (


        <Stack.Navigator  >


            <Stack.Screen name='home' component={Dashboard} options={{ headerShown: false }} />


        </Stack.Navigator>






    );





};
const MainStackNavigator2 = () => {




    return (


        <Stack.Navigator  >


            <Stack.Screen name='profile' component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>






    );





};






export { MainStackNavigator1, MainStackNavigator2 };