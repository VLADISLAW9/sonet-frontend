'use client';

import { memo } from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Logotype } from '@/components/ui/Logotype';
import { Typography } from '@/components/ui/Typography';

import { LoginForm } from './components/LoginForm';
import { useLoginForm } from './hooks/useLoginForm';

const LoginPage = () => {
  const { onSubmit, form, isLoading, error } = useLoginForm();

  return (
    <Card>
      <CardHeader>
        <Logotype className='w-14 h-14 m-auto' />
        <Typography variant='typography20_medium'>Вход</Typography>
      </CardHeader>
      <CardContent>
        <LoginForm error={error} isLoading={isLoading} onSubmit={onSubmit} form={form} />
      </CardContent>
    </Card>
  );
};

export default memo(LoginPage);
