import React from 'react';
import { View } from 'react-native';
import { Banner } from '@/components/Banner';

const HomeScreen = ({ navigation }: { navigation: INavigation }) => {
  return (
    <View>
      <Banner title='Suas entregas mais rápidas e seguras!' subTitle='Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum.' />
    </View>
  );
};

export default HomeScreen;
