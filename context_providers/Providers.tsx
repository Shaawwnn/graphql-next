'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './AuthContextProvider';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID || ''}>
        <AuthProvider>{children}</AuthProvider>
      </GoogleOAuthProvider>
    </ApolloProvider>
  );
}
