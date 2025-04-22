'use client';

import { GoogleButtonLogin } from '@/components/GoogleLoginButton';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCreate_UserMutation, UserRole } from '@/generated';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(2).max(50),
    confirmPassword: z.string().min(2).max(50),
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    contactNumber: z.string().min(10).max(15)
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  });

const Register: React.FC = () => {
  const [createUser] = useCreate_UserMutation();
  const router = useRouter();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      contactNumber: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      await createUser({
        variables: {
          userInput: {
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            contactNumber: values.contactNumber,
            role: UserRole.Patron
          }
        }
      });

      router.push('/');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-72 max-w-sm">
          <h1 className="text-center text-3xl font-bold">Create Account</h1>
          <h3 className="text-gray-500 mb-6">Sign up to get started.</h3>
          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Confirm Password" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-2" type="submit">
            Sign Up
          </Button>
          <div className="flex items-center gap-2 my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <GoogleButtonLogin />
          <div className="text-center text-xs mt-10">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Register;
