'use client';

import { useGoogle_AuthLazyQuery } from '@/generated';
import { useAuth } from '@/hooks/useAuth';
import { GoogleLogin } from '@react-oauth/google';
import { JSX } from 'react';

export const GoogleButtonLogin = (): JSX.Element => {
  const { user, setAuth } = useAuth();
  const [googleAuth, { data, loading, error }] = useGoogle_AuthLazyQuery({
    fetchPolicy: 'network-only'
  });

  return (
    <>
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
            }
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </>
  );
};
