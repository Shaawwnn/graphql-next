'use client';

import { useAuth } from '@/hooks/useAuth';
import { gql, useLazyQuery } from '@apollo/client';
import { GoogleLogin } from '@react-oauth/google';
import { JSX } from 'react';

const GOOGLE_AUTH = gql`
  query GoogleAuth($idToken: String) {
    googleAuth(idToken: $idToken) {
      _id
      firstName
      role
      imageUrl
      title
    }
  }
`;

export const GoogleButtonLogin = (): JSX.Element => {
  const { user, setAuth } = useAuth();
  const [googleAuth, { data, loading, error }] = useLazyQuery(GOOGLE_AUTH, {
    fetchPolicy: 'network-only'
  });
  console.log(user);
  return (
    <>
      <GoogleLogin
        onSuccess={credentialResponse => {
          googleAuth({ variables: { idToken: credentialResponse.credential } });
          if (data.googleAuth) setAuth(data.googleAuth);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      <div>{user?.firstName}</div>
    </>
  );
};
