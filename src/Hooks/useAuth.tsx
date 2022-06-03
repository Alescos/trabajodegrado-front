/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useContext, useState } from 'react';

const AuthContext = createContext(false);

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return (
      <AuthContext.Provider value={isAuthenticated}>
        {children}
      </AuthContext.Provider>
    );
  }
}

/* const AuthContext = createContext(null);

type props = {
  children: ReactNode;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};

export function AuthProvider({ children }: props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
} */
