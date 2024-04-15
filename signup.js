import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const SignupScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignup = async () => {
        setIsLoading(true);

        try {
            if (!isValidEmail(username)) {
                throw new Error('Please enter a valid email address');
            }

            if (password !== confirmPassword) {
                throw new Error('Passwords do not match');
            }

            // Send signup request to your API
            const response = await fetch('https://api.way2employee.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Signup failed');
            }

            // Signup successful, navigate to login screen
            navigation.navigate('Login');
        } catch (error) {
            setErrorMessage(error.message || 'Failed to signup. Please try again.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const isValidEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignup}
                disabled={isLoading}
            >
                <Text style={styles.buttonText}>{isLoading ? 'Loading...' : 'Signup'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
    input: {
        width: '80%',
        backgroundColor: '#333', // Input field background color
        color: '#fff', // Input text color
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        opacity: 1
    },
    button: {
        width: '80%',
        backgroundColor: '#27ae60', // Login button background color
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        margin: 10,
        opacity: 1
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10,
    },
});

export default SignupScreen;
