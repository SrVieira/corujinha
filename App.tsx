import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { QueryClientProvider } from '@tanstack/react-query';
import { useColorScheme } from 'react-native';
import queryClient from '@/services/queryClient';
import Navigation from '@/navigation';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <Navigation colorScheme={colorScheme} />
        </PaperProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
