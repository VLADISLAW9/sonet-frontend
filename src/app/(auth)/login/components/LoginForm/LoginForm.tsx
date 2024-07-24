'use client';

import type { UseFormReturn } from 'react-hook-form';

import type { LoginSchema } from '@/app/(auth)/login/consts/loginSchema';
import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { VStack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';

interface LoginFormProps {
  onSubmit: () => void;
  form: UseFormReturn<LoginSchema, any, undefined>;
  isLoading?: boolean;
  error?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { form, onSubmit, isLoading, error } = props;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
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
                      disabled={isLoading}
                      isError={!!error}
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
                      disabled={isLoading}
                      isError={!!error}
                      placeholder='Пароль'
                      type='password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && (
              <Typography className='text-error' variant='typography14_medium'>
                {error}
              </Typography>
            )}
          </VStack>
          <Button loading={isLoading} type='submit'>
            <Typography variant='typography14_regular'>Войти</Typography>
          </Button>
        </VStack>
      </form>
    </Form>
  );
};
