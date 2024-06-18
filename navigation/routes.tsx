import { DashboardScreen } from "@/screens/DashboardScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";

export const publicRoutes = [
  { name: 'home', component: HomeScreen },
];

export const privateRoutes = [
  { name: 'profile', component: ProfileScreen },
  { name: 'dashboard', component: DashboardScreen }
];
