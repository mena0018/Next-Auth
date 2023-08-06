import { FC } from 'react';
import { Metadata } from 'next';
import { Fingerprint } from 'lucide-react';
import { AuthForm } from '@/components/auth-form';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication Page made with Next.',
};

const AuthenticationPage: FC = () => {
  return (
    <main className='container relative flex min-h-screen flex-col items-center justify-center sm:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col bg-muted bg-zinc-900 p-10 text-white dark:border-r lg:flex'>
        <div className='relative z-20 flex items-center gap-2 text-lg font-medium'>
          <Fingerprint />
          Next - Authentication
        </div>
      </div>

      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px] lg:p-8'>
        <h1 className='text-center text-2xl font-semibold tracking-tight'>Create an account</h1>
        <AuthForm />
      </div>
    </main>
  );
};

export default AuthenticationPage;
