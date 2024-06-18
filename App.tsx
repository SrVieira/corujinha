import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/services/queryClient';
import Navigation from '@/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
