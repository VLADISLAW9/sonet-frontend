'use client';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Card } from '@/components/ui/Card';
import { CardContent, CardHeader } from '@/components/ui/Card/card';
import { memo } from 'react';
import { useSignInForm } from './lib/hooks/useSignInForm';
import { SignInSchema } from './lib/schemas/signInSchema';
import { useRouter } from 'next/navigation';
import { getRouteHome } from '@/shared/consts/router';

const SignInPage = () => {
  const form = useSignInForm();
  const router = useRouter();

  const onSubmit = async (data: SignInSchema) => {
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
