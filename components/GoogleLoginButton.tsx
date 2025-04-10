'use client';

import { useGoogle_AuthLazyQuery } from '@/generated';
import { useAuth } from '@/hooks/useAuth';
import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { JSX } from 'react';

export const GoogleButtonLogin = (): JSX.Element => {
  const { setAuth } = useAuth();
  const [googleAuth, { data }] = useGoogle_AuthLazyQuery({
    fetchPolicy: 'network-only'
  });
  const router = useRouter();

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

            if (data) {
              const { _id, email, role, firstName, lastName, imageUrl } = data.googleAuth;
              setAuth({ uid: _id, email, role, firstName, lastName, imageUrl });
              router.push('/');
            }
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
};
