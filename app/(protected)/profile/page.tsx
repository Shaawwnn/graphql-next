'use client';

import { Spinner } from '@/components/Spinner';
import { useGet_UserQuery } from '@/generated';
import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';

const Profile: React.FC = () => {
  const { user: authUser } = useAuth();
  const { data } = useGet_UserQuery({ variables: { id: authUser?.uid || '' } });

  if (!data) return <Spinner />;

  const user = data.getUser;

  return (
    <div className="max-w-4xl flex flex-col mx-auto h-screen p-6">
      <div className="mx-auto flex items-center w-full">
        <main className="flex p-2 gap-8">
          <Image
            className="rounded-full"
            src={user.imageUrl || '/assets/default-user-img.png'}
            alt="User avatar"
            width={150}
            height={150}
          />
          <div className="">
            <h1 className="text-3xl font-bold text-center mx-auto mt-7 ">
              {user.firstName} {user.lastName}
            </h1>
            <h2>{user.title}</h2>
            <p>{user.bio}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
