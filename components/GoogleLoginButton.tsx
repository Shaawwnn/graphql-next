'use client';

import { useGoogle_AuthLazyQuery } from '@/generated';
import { useAuth } from '@/hooks/useAuth';
import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const GoogleButtonLogin: React.FC = () => {
  const { user, setAuth } = useAuth();
  const [googleAuth, { data }] = useGoogle_AuthLazyQuery({
    fetchPolicy: 'network-only'
  });
  const router = useRouter();

  useEffect(() => {
    if (user?.uid) {
      router.replace('/home'); // redirect to home
    }
  }, [user, router]);

  useEffect(() => {
    if (data) {
      const { _id, email, role, firstName, lastName, imageUrl } = data.googleAuth;
      setAuth({ uid: _id, email, role, firstName, lastName, imageUrl });
      router.push('/home');
    }
  }, [data, router, setAuth]);

  return (
    <div className="w-full h-1/2 flex items-center justify-center">
      <GoogleLogin
        onSuccess={async credentialResponse => {
          if (credentialResponse.credential) {
            await googleAuth({
              variables: {
                idToken: credentialResponse.credential
              }
            });
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
};
