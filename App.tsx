import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/services/queryClient';
import Navigation from '@/navigation';

export default function App() {
  return (
    <Navigation />
  );
}
