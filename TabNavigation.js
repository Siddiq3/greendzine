import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator1, MainStackNavigator2 } from './StackNavigation';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'ios-person' : 'ios-person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabel: '', // Hide tab labels
                    tabBarStyle: {
                        backgroundColor: '#0F2323',
                        paddingBottom: 0,
                        borderTopWidth: 0,
                        elevation: 10, // Add elevation for shadow effect
                        shadowColor: '#fff', // Shadow color
                        shadowOpacity: 1, // Shadow opacity
                        shadowRadius: 50, // Shadow radius
                        shadowOffset: {
                            width: 30,
                            height: 3,
                        },
                    },
                })}
            >
                <Tab.Screen name="Home" component={MainStackNavigator1} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={MainStackNavigator2} options={{ headerShown: false }} />
            </Tab.Navigator>
        </SafeAreaView>

    );
}
export default function TabNavigation() {
    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <NavigationContainer independent={true}>
                <MyTabs />

            </NavigationContainer>



        </SafeAreaProvider>
    );
}
