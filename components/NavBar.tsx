'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback } from './ui/avatar';
import { buttonVariants } from './ui/button';

export const NavBar: React.FC = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const fallbackName = user?.firstName ? user.firstName.charAt(0) : 'U';

  if (!user) {
    return null;
  }

  return (
    <div className="w-full bg-white shadow-md text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex space-x-6">
          <span className="text-lg font-bold p-1 cursor-pointer">SwiftAid</span>
          <Link href="/home" className={buttonVariants({ variant: 'ghost' })}>
            Home
          </Link>
        </div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="outline-none relative">
            {' '}
            <Avatar>
              {user.imageUrl && (
                <Image
                  className="w-10 h-10 rounded-full"
                  src={user.imageUrl}
                  alt="User avatar"
                  width={60}
                  height={60}
                />
              )}
              <AvatarFallback className="flex bg-black w-10 h-10 rounded-full text-white items-center justify-center font-bold text-xl">
                {fallbackName}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/bookings">Bookings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                logout();
                router.replace('/login');
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
