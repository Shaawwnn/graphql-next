'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLoginMutation } from '@/generated';
import { useAuth } from '@/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { GoogleButtonLogin } from '../../components/GoogleLoginButton';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2).max(50)
});

const Login: React.FC<{}> = () => {
  const [login, { data, error, loading }] = useLoginMutation();
  const { setAuth } = useAuth();
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    // ✅ This will be type-safe and validated.
    await login({
      variables: {
        email: values.email,
        password: values.password
      }
    });

    if (error) {
      console.error('Login error:', error);
    }

    if (data) {
      const { _id, email, role, firstName, lastName, imageUrl } = data.login;
      setAuth({ uid: _id, email, role, firstName, lastName, imageUrl });

      router.push('/');
    } else {
      console.error('Login failed:', error);
    }
  };

  if (error) {
    window.alert(error);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-72 max-w-sm">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
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
          <Button className="mt-2" type="submit">
            Submit
          </Button>
          <div className="flex items-center gap-2 my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <GoogleButtonLogin />
        </form>
      </Form>
    </div>
  );
};

export default Login;
