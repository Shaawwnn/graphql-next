import { AuthContext } from '@/context_providers/AuthContextProvider';
import { useContext } from 'react';

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('Error using auth context');
  return { user: auth.user, setAuth: auth.setAuth };
};
