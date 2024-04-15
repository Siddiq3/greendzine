import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(username)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }

        // Check for empty fields
        if (!username || !password) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('https://api.way2employee.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            // If login is successful, navigate to the home page
            navigation.navigate('TabNavigation');
        } catch (error) {
            Alert.alert('Error', 'Login failed. Please Enter Correct Email and Password and try again.');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                {/* Replace with your logo */}
                <Image source={require('./assets/logo.png')} style={styles.logoText} />
                <Text style={styles.text}>#We are Electric</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="E-mail"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.forgotPassword} onPress={() => { navigation.navigate('rest'); }}>
                Forgot Password?
            </Text>
            <Text style={styles.forgotPassword} onPress={() => { navigation.navigate('signup'); }}>
                New User? Signup
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Dark theme background color
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        marginBottom: 30,
    },
    text: {
        textAlign: 'center',
        color: '#36A546CC',
        borderColor: '#000000',
        fontSize: 14,
    },
    logoText: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 50,
        opacity: 1,
    },
    input: {
        width: '80%',
        backgroundColor: '#333', // Input field background color
        color: '#fff', // Input text color
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        opacity: 1,
    },
    button: {
        width: '80%',
        backgroundColor: '#27ae60', // Login button background color
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        margin: 10,
        opacity: 1,
    },
    buttonText: {
        color: '#FFFFFF8C', // Button text color
        fontSize: 18,
        opacity: 1,
    },
    forgotPassword: {
        color: '#36A546', // Forgot password text color
        marginTop: 15,
        opacity: 1,
    },
});

export default LoginScreen;
