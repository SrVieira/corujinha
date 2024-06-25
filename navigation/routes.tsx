import { HomeScreen } from "@/screens/HomeScreen";
import { WelcomeScreen } from "@/screens/WelcomeScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";
import { LoginScreen } from "@/screens/LoginScreen";
import { RegisterScreen } from "@/screens/RegisterScreen";
import { AuthScreen } from "@/screens/AuthScreen";

export const publicRoutes = [
  { name: 'Welcome', component: WelcomeScreen },
  { name: 'Login', component: LoginScreen },
  { name: 'Register', component: RegisterScreen },
  { name: 'Auth', component: AuthScreen }
];

export const privateRoutes = [
  { name: 'Profile', component: ProfileScreen },
  { name: 'Home', component: HomeScreen }
];
