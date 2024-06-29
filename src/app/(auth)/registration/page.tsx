'use client';

import { memo } from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Logotype } from '@/components/ui/Logotype';
import { Typography } from '@/components/ui/Typography';

import { RegistrationForm } from './components/RegistrationForm/RegistrationForm';
import { useRegistrationForm } from './lib/hooks/useRegistrationForm';

const RegistrationPage = () => {
  const { form, isLoading, onSubmit, error } = useRegistrationForm();

  return (
    <Card>
      <CardHeader>
        <Logotype className='w-14 h-14 m-auto' />
        <Typography variant='typography20_medium'>Регистрация</Typography>
      </CardHeader>
      <CardContent>
        <RegistrationForm form={form} isLoading={isLoading} onSubmit={onSubmit} error={error} />
      </CardContent>
    </Card>
  );
};

export default memo(RegistrationPage);
