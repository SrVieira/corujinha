import React from 'react';
import { Button } from 'react-native-paper';
import { ImageBackground, View, StyleSheet, Text } from 'react-native';
import { Typography } from '@/constants/Typography';

const Banner = ({ title, subTitle, buttons }: IBanner) => {
  return (
    <>
      <ImageBackground source={require('@/assets/images/bgheader.png')} style={styles.banner} />
      <View style={styles.content}>
        <Text style={{ ...Typography.head1, marginBottom: 6 }}>{title}</Text>
        <Text style={Typography.body2}>{subTitle}</Text>
        <View style={styles.buttons}>
          {buttons.map((button: IButton) => (
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
              {button.label}
            </Button>
          ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: '26rem',
    display: 'flex',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  buttons: {
    position: 'absolute',
    bottom: 80,
  },
  content: {
    minHeight: '44vh',
    position: 'relative',
    paddingHorizontal: 36,
    paddingVertical: 48,
  }
});

type IButton = {
  label: string;
}

type IBanner = {
  title: string;
  subTitle: string;
  buttons: IButton[];
}

export default Banner;
