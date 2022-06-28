/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useContext, useState } from 'react';

const initialState = {
  user: null,
  isAuthenticated: false,
};
interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);
const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const signin = (user: any, callback: VoidFunction) => {
    setUser(user);
    localStorage.setItem('user', user);
    setIsAuthenticated(true);
    callback();
  };
  const signout = (callback: VoidFunction) => {
    setUser(null);
    setIsAuthenticated(false);
    callback();
  };

  const value = {
    user,
    signin,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
