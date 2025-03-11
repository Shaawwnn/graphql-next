'use client';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { JSX } from 'react';

export const GoogleButtonLogin = (): JSX.Element => (
  <GoogleLogin
    onSuccess={credentialResponse => {
      const decodedToken = jwtDecode(credentialResponse.credential || '');
      console.log('Decoded User Info:', decodedToken);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
);
