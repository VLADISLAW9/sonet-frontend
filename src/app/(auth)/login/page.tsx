'use client';

import { memo } from 'react';

import { FormWrapper } from '@/components/FormWrapper';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Logotype } from '@/components/ui/Logotype';
import { VStack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';

import { useLoginPage } from './hooks/useLoginPage';

const LoginPage = () => {
  const { state, functions, form } = useLoginPage();

  return (
    <Card>
      <CardHeader>
        <Logotype className='w-14 h-14 m-auto' />
        <Typography variant='typography20_medium'>Вход</Typography>
      </CardHeader>
      <CardContent>
        <FormWrapper form={form} onSubmit={functions.onSubmit}>
          <VStack gap='24'>
            <VStack gap='16'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='email'
                        disabled={state.isLoading}
                        isError={!!state.error}
                        placeholder='Email'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={state.isLoading}
                        isError={!!state.error}
                        placeholder='Пароль'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!!state.error && (
                <Typography className='text-error' variant='typography14_medium'>
                  {state.error}
                </Typography>
              )}
            </VStack>
            <Button loading={state.isLoading} type='submit'>
              <Typography variant='typography14_regular'>Войти</Typography>
            </Button>
          </VStack>
        </FormWrapper>
      </CardContent>
    </Card>
  );
};

export default memo(LoginPage);
