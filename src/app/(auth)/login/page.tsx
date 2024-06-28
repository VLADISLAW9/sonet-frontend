'use client';

import { memo } from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';

import { LoginForm } from './components/LoginForm';
import { useLoginForm } from './lib/hooks/useLoginForm';

const LoginPage = () => {
  const { onSubmit, form, isLoading } = useLoginForm();

  return (
    <Card>
      <CardHeader>Вход</CardHeader>
      <CardContent>
        <LoginForm isLoading={isLoading} onSubmit={onSubmit} form={form} />
      </CardContent>
    </Card>
  );
};

export default memo(LoginPage);
