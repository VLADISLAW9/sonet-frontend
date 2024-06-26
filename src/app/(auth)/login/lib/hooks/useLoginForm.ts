import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { getRouteHome } from '@/shared/consts/router';

import type { LoginSchema } from '../schemas/loginSchema';
import { loginSchema } from '../schemas/loginSchema';

import { useLoginMutation } from './useLoginMutation';

export const useLoginForm = () => {
  const router = useRouter();
  const loginMutation = useLoginMutation();

  const [error, setError] = useState('');

  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = loginForm.handleSubmit(async (values) => {
    setError('');

    const loginMutationResponse = await loginMutation.mutateAsync({
      params: {
        email: values.email,
        password: values.password
      }
    });

    if (loginMutationResponse.status !== 200 && typeof loginMutationResponse.data === 'string') {
      return setError(loginMutationResponse?.data);
    }

    router.push(getRouteHome());
  });

  return {
    form: loginForm,
    isLoading: loginForm.formState.isSubmitting,
    onSubmit,
    error
  };
};
