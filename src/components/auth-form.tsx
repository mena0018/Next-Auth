'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Fields, zFields } from '@/models';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import SignButton from '@/components/sign-button';

const AuthForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Fields>({ resolver: zodResolver(zFields) });

  const onSubmit: SubmitHandler<Fields> = (data) => {
    console.log(data);
  };

  return (
    <div className={cn('grid gap-6')}>
      <form className='grid gap-5' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            placeholder='name@example.com'
            disabled={isSubmitting}
            {...register('email')}
          />
          {errors.email?.message && <span className='error-msg'>{errors.email?.message}</span>}
        </div>

        <div className='grid gap-2'>
          <Label htmlFor='email'>Password</Label>
          <Input
            id='password'
            type='password'
            placeholder='***********'
            {...register('password')}
          />
          {errors.password?.message && (
            <span className='error-msg'>{errors.password?.message}</span>
          )}
        </div>

        <SignButton />
      </form>
    </div>
  );
};

export { AuthForm };
