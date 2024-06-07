import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUserData | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    };
    loadUser();
  }, []);

  const signIn = async ({ email, password }: IUserData) => {
    // Implementar lógica de login
    console.log(password);
    const userData = { email };
    setUser(userData);
    await AsyncStorage.setItem('user', JSON.stringify(userData));
  };

  const signUp = async ({ email, password }: IUserData) => {
    // Implementar lógica de registro
    console.log(password);
    const userData = { email };
    setUser(userData);
    await AsyncStorage.setItem('user', JSON.stringify(userData));
  };

  const signOut = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

interface IUserData {
  email: string;
  password?: string;
}

export default AuthContext;
