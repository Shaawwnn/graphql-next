'use client';

import { NavBar } from '@/components/NavBar';
import { RequireAuth } from '@/components/RequireAuth';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <NavBar />
      {children}
    </RequireAuth>
  );
}
