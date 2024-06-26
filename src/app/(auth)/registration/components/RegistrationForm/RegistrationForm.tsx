'use client';

import type { UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { VStack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';

import type { RegistrationSchema } from '../../lib/schemas/registrationSchema';

interface RegistrationFormProps {
  onSubmit: () => void;
  form: UseFormReturn<RegistrationSchema, any, undefined>;
  isLoading?: boolean;
  error?: string;
}

export const RegistrationForm = (props: RegistrationFormProps) => {
  const { form, onSubmit, isLoading, error } = props;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <VStack gap='24'>
          <VStack gap='16'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input disabled={isLoading} isError={!!error} placeholder='Имя' {...field} />
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
                      disabled={isLoading}
                      isError={!!error}
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
                      disabled={isLoading}
                      isError={!!error}
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
                      type='password'
                      disabled={isLoading}
                      isError={!!error}
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
                      disabled={isLoading}
                      isError={!!error}
                      placeholder='Подтвердите пароль'
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
            <Typography variant='typography14_regular'>Зарегистрироваться</Typography>
          </Button>
        </VStack>
      </form>
    </Form>
  );
};
