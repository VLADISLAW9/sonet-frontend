'use client';

import type { UseFormReturn } from 'react-hook-form';

import type { SignInSchema } from '@/app/(auth)/login/lib/schemas/signInSchema';
import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { VStack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';

interface SignInFormProps {
  onSubmit: () => void;
  form: UseFormReturn<SignInSchema, any, undefined>;
  isLoading?: boolean;
}

export const LoginForm = (props: SignInFormProps) => {
  const { form, onSubmit, isLoading } = props;

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
                    <Input placeholder='Email' {...field} />
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
                    <Input placeholder='Пароль' type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </VStack>
          <Button loading={isLoading} type='submit'>
            <Typography variant='typography14_regular'>Войти</Typography>
          </Button>
        </VStack>
      </form>
    </Form>
  );
};
