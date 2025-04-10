'use client';

import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';
import { Avatar, AvatarFallback } from './ui/avatar';

export const NavBar: React.FC = () => {
  const { user } = useAuth();
  const fallbackName = user?.firstName ? user.firstName.charAt(0) : 'U';

  if (!user) {
    return null;
  }
  console.log(user.imageUrl);
  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex space-x-6">
          <span className="text-lg font-bold">SwiftAid</span>
          <a href="#" className="text-gray-600 hover:text-black">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Profile
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Logout
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Avatar>
            <Image
              className="w-10 h-10 rounded-full"
              src={user.imageUrl || ''} // default fallback image
              alt="User avatar"
              width={60} // Actual size for image optimization
              height={60} // Actual size for image optimization
            />
            <AvatarFallback className="flex bg-black w-10 h-10 rounded-full text-white items-center justify-center font-bold text-xl">
              {fallbackName}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};
