import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';

const image = require('@/assets/images/background.png');

const AuthScreen = () => {
  const navigation: INavigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.content}>
          <Typography variant='bodyLarge' style={styles.title}>
            Bora criar sua conta?
          </Typography>
          <View style={styles.actions}>
            <Button icon="email" mode="contained" onPress={() => navigation.navigate('Register')}>Criar conta com email</Button>
            <Button icon="google" mode="contained" variant="secondary" onPress={() => navigation.navigate('Auth')}>Criar conta com Google</Button>
            <Button icon="facebook" mode="contained" variant="secondary" onPress={() => navigation.navigate('Auth')}>Criar conta com Facebook</Button>
            <Typography variant='bodySmall' style={styles.alreadyRegistred} onPress={() => navigation.navigate('Register')}>
              Já tenho uma conta
            </Typography>
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
  content: {
    paddingHorizontal: 36,
    paddingVertical: 44,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  actions: {
    marginTop: 80,
    gap: 14
  },
  title: {
    marginBottom: 6
  },
  alreadyRegistred: {
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
});

export default AuthScreen;
