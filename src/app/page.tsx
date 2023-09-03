import { FC } from 'react';
import Link from 'next/link';

const HomePage: FC = () => {
  return (
    <main className='container relative flex min-h-screen flex-col items-center justify-center bg-slate-900'>
      <Link href='/admin' className='text-3xl font-semibold text-white'>
        Go to Admin mode
      </Link>
    </main>
  );
};

export default HomePage;
