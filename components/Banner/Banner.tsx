import { Typography } from '@/constants/Typography';
import React from 'react';
import { ImageBackground, View, StyleSheet, Text } from 'react-native';

const Banner = ({ title, subTitle }: IBanner) => {
  return (
    <>
      <ImageBackground source={require('@/assets/images/bgheader.png')} style={styles.banner} />
      <View style={styles.content}>
        <Text style={Typography.head1}>{title}</Text>
        <Text style={Typography.body2}>{subTitle}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: '28rem',
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  content: {
    paddingHorizontal: 36,
    paddingVertical: 48,
  }
});

type IBanner = {
  title: string;
  subTitle: string;
}

export default Banner;
