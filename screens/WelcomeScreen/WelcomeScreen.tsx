import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation: INavigation = useNavigation();

  return (
    <View>
      <Text>
        Let's Get Started!
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}>
          <Text>
            Sign Up
          </Text>
        </TouchableOpacity>
        <View>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
