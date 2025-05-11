'use client';

import { useRouter } from 'next/navigation';
import { JSX, useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';

export const RequireAuth = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user, router]);

  return <>{children}</>;
};
