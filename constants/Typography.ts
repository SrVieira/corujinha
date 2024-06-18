import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const Typography = StyleSheet.create({
  head1: {
    fontFamily: 'Inter_700Bold',
    color: Colors.dark.text,
    fontSize: 30,
  },
  body2: {
    fontFamily: 'Inter_400Regular',
    color: Colors.grey[100],
    fontSize: 20,
  }
});