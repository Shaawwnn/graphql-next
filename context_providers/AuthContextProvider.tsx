'use client';

import { Spinner } from '@/components/Spinner';
import { useLogoutMutation, useMeQuery } from '@/generated';
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
  const [_logout] = useLogoutMutation();
  const client = useApolloClient();
  const { data, loading } = useMeQuery();

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
    await _logout();
    setAuth(undefined);
    // Reset Apollo cache to remove user data
    await client.clearStore();
  };

  if (loading) {
    return <Spinner />;
  }

  return <AuthContext.Provider value={{ user: auth || null, logout, setAuth }}>{children}</AuthContext.Provider>;
};
