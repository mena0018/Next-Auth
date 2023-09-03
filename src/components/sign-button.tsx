'use client';

import { FC } from 'react';
import { Github } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';

const SignButton: FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user) {
    return (
      <div className='ml-auto flex gap-4'>
        <p className='text-sky-600'>{session.user.name}</p>
        <Button className='bg-red-600' onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button>Sign in</Button>
      <Button
        className='mx-auto w-fit bg-transparent text-black hover:bg-transparent'
        onClick={() => router.push('/api/auth/signin')}
      >
        <Github />
      </Button>
    </>
  );
};

export default SignButton;
