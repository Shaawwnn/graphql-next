'use client';

import { useApolloClient } from '@apollo/client';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface IAuthContextType {
  user: any;
  logout: () => void;
  setAuth: Dispatch<SetStateAction<undefined>>;
}

export const AuthContext = createContext<IAuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState();
  const client = useApolloClient();
  // Logout function
  const logout = async () => {
    await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      credentials: 'include' // Ensure cookies are included
    });

    // Reset Apollo cache to remove user data
    await client.clearStore();
  };

  return <AuthContext.Provider value={{ user: auth || null, logout, setAuth }}>{children}</AuthContext.Provider>;
};
