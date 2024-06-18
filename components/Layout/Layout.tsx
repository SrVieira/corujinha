import React from 'react';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';

const Layout = ({ children }: { children: JSX.Element }) => {
  let [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>{children}</>
  );
}

export default Layout;
