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

import { useRegistrationPage } from './hooks/useRegistrationPage';

const RegistrationPage = () => {
  const { form, state, functions } = useRegistrationPage();

  return (
    <Card>
      <CardHeader>
        <Logotype className='w-14 h-14 m-auto' />
        <Typography variant='typography20_medium'>Регистрация</Typography>
      </CardHeader>
      <CardContent>
        <FormWrapper form={form} onSubmit={functions.onSubmit}>
          <VStack gap='24'>
            <VStack gap='16'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={state.isLoading}
                        isError={!!state.error}
                        placeholder='Имя'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='surname'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={state.isLoading}
                        isError={!!state.error}
                        placeholder='Фамилия'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='nickname'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={state.isLoading}
                        isError={!!state.error}
                        placeholder='Никнейм'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                        type='password'
                        disabled={state.isLoading}
                        isError={!!state.error}
                        placeholder='Пароль'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='password'
                        disabled={state.isLoading}
                        isError={!!state.error}
                        placeholder='Подтвердите пароль'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {state.error && (
                <Typography className='text-state.error' variant='typography14_medium'>
                  {state.error}
                </Typography>
              )}
            </VStack>
            <Button loading={state.isLoading} type='submit'>
              <Typography variant='typography14_regular'>Зарегистрироваться</Typography>
            </Button>
          </VStack>
        </FormWrapper>
      </CardContent>
    </Card>
  );
};

export default memo(RegistrationPage);
