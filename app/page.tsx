import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleButtonLogin } from './components/GoogleLoginButton';

export default function Home() {
  return (
    <GoogleOAuthProvider clientId={process.env.OAUTH_CLIENT_ID || ''}>
      <div className="flex h-screen">
        <h1 className="mx-auto my-auto">Hi</h1>
        <GoogleButtonLogin />
      </div>
    </GoogleOAuthProvider>
  );
}
