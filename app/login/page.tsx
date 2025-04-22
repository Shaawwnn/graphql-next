'use client';

import { GoogleButtonLogin } from '@/components/GoogleLoginButton';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLoginMutation } from '@/generated';
import { useAuth } from '@/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2).max(50)
});

const Login: React.FC = () => {
  const [login, { data, error }] = useLoginMutation();
  const { setAuth } = useAuth();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  useEffect(() => {
    if (data) {
      const { _id, email, role, firstName, lastName, imageUrl } = data.login;
      setAuth({ uid: _id, email, role, firstName, lastName, imageUrl });
    }
  }, [data, setAuth]);

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    await login({
      variables: {
        email: values.email,
        password: values.password
      }
    });
  };

  if (error) {
    console.error('Login error:', error);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-72 max-w-sm">
          <h1 className="text-center text-3xl font-bold mb-4">Login</h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <div className="text-red-500 text-sm">Invalid name or password</div>}
          <Button className="mt-2" type="submit">
            Sign In
          </Button>
          <div className="flex items-center gap-2 my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <GoogleButtonLogin />
          <div className="text-center text-xs mt-10">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
