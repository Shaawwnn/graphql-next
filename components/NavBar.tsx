'use client';

import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';

export const NavBar: React.FC = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const fallbackName = user?.firstName ? user.firstName.charAt(0) : 'U';

  if (!user) {
    return null;
  }

  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex space-x-6">
          <span className="text-lg font-bold">SwiftAid</span>
          <Button variant={'ghost'}>Home</Button>
          <Button variant={'ghost'}>Profile</Button>
          <Button
            variant={'ghost'}
            onClick={() => {
              logout();
              router.replace('/login');
            }}
          >
            Logout
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <Avatar>
            {user.imageUrl && (
              <Image className="w-10 h-10 rounded-full" src={user.imageUrl} alt="User avatar" width={60} height={60} />
            )}
            <AvatarFallback className="flex bg-black w-10 h-10 rounded-full text-white items-center justify-center font-bold text-xl">
              {fallbackName}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};
