import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const AnimatedSplashScreen = ({ onAnimationEnd }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('./assets/screen.gif')}
                style={styles.image}
                onLoadEnd={onAnimationEnd}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default AnimatedSplashScreen;
