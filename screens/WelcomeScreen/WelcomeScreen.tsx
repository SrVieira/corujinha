import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';

const image = require('@/assets/images/background.png');

const WelcomeScreen = () => {
  const navigation: INavigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.content}>
          <Typography variant='bodyLarge' style={styles.title}>
            Suas entregas mais rápidas e seguras!
          </Typography>
          <Typography variant='bodyMedium'>
            Amamos transformar cada entrega em uma experiência excepcional!
          </Typography>
          <View style={styles.buttons}>
            <Button mode="contained">Começar Agora</Button>
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
  },
  buttons: {
    marginTop: 80
  },
  title: {
    marginBottom: 6
  }
});

export default WelcomeScreen;
