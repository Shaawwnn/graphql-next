import { NavBar } from '@/components/NavBar';
import { Providers } from '@/context_providers/Providers';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'SwiftAid',
  description: 'A platform for swift and effective assistance'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <GoogleOAuthProvider clientId={process.env.OAUTH_CLIENT_ID || ''}>
            <NavBar />
            {children}
          </GoogleOAuthProvider>
        </Providers>
      </body>
    </html>
  );
}
