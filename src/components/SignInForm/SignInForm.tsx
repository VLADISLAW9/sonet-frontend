'use client';
import { FormProps, UseFormReturn } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/Form';
import { Input } from '../ui/Input';
import { SignInSchema } from '@/app/signIn/lib/schemas/signInSchema';
import { VStack } from '../ui/Stack';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';

interface SignInFormProps {
  className?: string;
  onSubmit: (data: SignInSchema) => void;
  form: UseFormReturn<SignInSchema, any, undefined>;
}

export const SignInForm = (props: SignInFormProps) => {
  const { form, onSubmit } = props;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <VStack gap='24'>
          <VStack gap='16'>
            <FormField
              control={form.control}
              name='login'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Логин' {...field} />
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
          <Button type='submit'>
            <Typography variant='typography14_regular'>Войти</Typography>
          </Button>
        </VStack>
      </form>
    </Form>
  );
};
