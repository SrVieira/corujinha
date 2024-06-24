import React from 'react';
import { useFonts, Inter_700Bold, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-paper';
import theme from '@/theme';

const Layout = ({ children }: { children: JSX.Element }) => {
  let [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default Layout;
