import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductivityBar = ({ day, percentage }) => {
    return (
        <View style={styles.barContainer}>
            <Text style={styles.dayText}>{`Productivity on ${day}`}</Text>
            <View style={styles.progressBar}>
                <View style={[styles.fillBar, { width: `${percentage / 1.5}%` }]} />
                <Text style={styles.percentage}>{`${percentage}%`}</Text>
            </View>
        </View>
    );
};

const Dashboard = () => {
    const productivityData = [
        { day: 'Monday', percentage: 4 },
        { day: 'Tuesday', percentage: 92 },
        { day: 'Wednesday', percentage: 122 },
        { day: 'Thursday', percentage: 93 },
        { day: 'Friday', percentage: 89 },
        { day: 'Saturday', percentage: 98 },
        // Add the rest of the week's data here
    ];

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('./assets/mlogo.png')} style={styles.logoText} />
                <Text style={styles.numberText}>4</Text>
            </View>
            <View style={styles.card}>

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.subHeader}>Employee Productivity Dashboard</Text>
                </TouchableOpacity>
                <View style={styles.card1}>
                    {productivityData.map((item, index) => (
                        <ProductivityBar key={index} day={item.day} percentage={item.percentage} />
                    ))}
                </View>

            </View>
            {/* Image at the top-right corner */}
            <View style={styles.imageTopRight}>
                <Image source={require('./assets/care.png')} style={styles.imageTopRight} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 20,
        position: 'relative', // Needed for absolute positioning
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
        margin: 100
    },
    card: {
        backgroundColor: '#5E5E5E82',
        borderRadius: 10,
    },
    card1: {
        padding: 25,
    },
    logoText: {
        width: 100,
        height: 100,
        borderRadius: 50,
        opacity: 1,

    },
    button: {
        backgroundColor: '#1A2C2C99',
        borderRadius: 15,
        opacity: 1,
        width: '100%',
    },
    subHeader: {
        color: '#FFFFFFB3',
        fontSize: 15,
        marginBottom: 20,
        textAlign: 'center',
        opacity: 0.84,

    },
    barContainer: {
        marginBottom: 10,
    },
    dayText: {
        color: 'white',
        marginBottom: 5,
        fontSize: 14
    },
    progressBar: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    fillBar: {
        height: 20,
        backgroundColor: 'green',
        borderRadius: 10,
        overflow: 'hidden',
    },
    percentage: {
        color: 'white',
        marginHorizontal: 4,
        alignItems: 'stretch',
    },
    // New styles for the top-right image
    imageTopRight: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        zIndex: 999, // Ensure it's above other elements
    },

    numberText: {
        color: 'white',
        fontSize: 14,
        position: 'absolute',
        top: -12, // Adjust this value to position the number properly
        right: 10, // Adjust this value to position the number properly
        backgroundColor: 'green',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, // Ensure it's above other elements
        textAlign: 'center'
    },
});

export default Dashboard;
