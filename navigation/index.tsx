import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Layout } from '@/components/Layout';
import useAuth from '@/hooks/useAuth';
import { publicRoutes, privateRoutes } from './routes';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { user } = useAuth();
  const initialRouteName = user ? 'welcome' : 'dashboard';
  const routes = user ? privateRoutes : publicRoutes;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{
        headerShown: false
      }}>
        {routes.map((route: any) => {
          const Component = route.component;

          return (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={(props: any) => (
                <Layout>
                  <Component {...props} />
                </Layout>
              )}
            />
          )
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
