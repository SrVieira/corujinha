import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const image = require('@/assets/images/background.png');

const WelcomeScreen = () => {
  const navigation: INavigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.texts}>
          <Text style={styles.text}>
            Let's Get Started!
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.text}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.text}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative'
  },
  texts: {
    padding: 36,
    position: 'absolute',
    bottom: 0,
  },
  text: {
    color: "#fff"
  }
});

export default WelcomeScreen;
