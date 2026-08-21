import React, { createContext, useContext, useState, useEffect } from "react";
import type { User } from "../types";
import { currentUser as mockCurrentUser } from "../data/users";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData?: any) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
  isLoading: true,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock check for existing session
    const checkAuth = async () => {
      setIsLoading(true);
      const isAuth = localStorage.getItem("gw-auth");
      if (isAuth === "true") {
        setUser(mockCurrentUser);
      }
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const login = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUser(mockCurrentUser);
    localStorage.setItem("gw-auth", "true");
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("gw-auth");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
