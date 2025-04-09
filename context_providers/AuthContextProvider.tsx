'use client';

import { useMeQuery } from '@/generated';
import { AuthUser } from '@/types/AuthUser';
import { useApolloClient } from '@apollo/client';
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';

interface IAuthContextType {
  user: AuthUser | null;
  logout: () => void;
  setAuth: Dispatch<SetStateAction<AuthUser | undefined>>;
}

export const AuthContext = createContext<IAuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthUser>();
  const client = useApolloClient();
  const { data } = useMeQuery();

  useEffect(() => {
    if (data) {
      const { _id, email, role, firstName, lastName, imageUrl } = data.me;
      setAuth({ uid: _id, email, role, firstName, lastName, imageUrl });
    } else {
      setAuth(undefined);
    }
  }, [data]);

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
