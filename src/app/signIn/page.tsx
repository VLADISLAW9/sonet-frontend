'use client';

import { memo } from 'react';
import { useRouter } from 'next/navigation';

import { SignInForm } from '@/app/signIn/components/SignInForm/SignInForm';
import { Card } from '@/components/ui/Card';
import { CardContent, CardHeader } from '@/components/ui/Card/card';
import { getRouteHome } from '@/shared/consts/router';

import { useSignInForm } from './lib/hooks/useSignInForm';

const SignInPage = () => {
  const form = useSignInForm();
  const router = useRouter();

  const onSubmit = () => {
    router.push(getRouteHome());
  };

  return (
    <Card>
      <CardHeader>Вход</CardHeader>
      <CardContent>
        <SignInForm onSubmit={onSubmit} form={form} />
      </CardContent>
    </Card>
  );
};

export default memo(SignInPage);
