import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#EF5600',
    secondary: '#FFFFFF'
  },
  fonts: {
    ...DefaultTheme.fonts,
    bodyLarge: {
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Inter_700Bold',
      color: '#FFFFFF'
    },
    bodyMedium: {
      fontSize: 20,
      fontWeight: 400,
      fontFamily: 'Inter_400Regular',
      color: '#7A7A7A'
    }
  },
  buttons: {
    primary: {
      color: '#FFFFFF',
      backgroundColor: '#EF5600',
    },
    secondary: {
      color: '#121212',
      backgroundColor: '#FFFFFF'
    },
  }
};

export default theme;
