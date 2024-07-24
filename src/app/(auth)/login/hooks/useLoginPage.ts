import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { useLoginMutation } from '@/shared/api/hooks/useLoginMutation';
import { getRouteHome } from '@/shared/consts/router';

import type { LoginSchema } from '../consts/loginSchema';
import { loginSchema } from '../consts/loginSchema';

export const useLoginPage = () => {
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

    if (loginMutationResponse.status !== 200) {
      return setError(
        typeof loginMutationResponse.data === 'string'
          ? loginMutationResponse.data
          : 'Произошла непредвиденная ошибка'
      );
    }

    router.push(getRouteHome());
  });

  return {
    state: {
      error,
      isLoading: loginForm.formState.isSubmitting
    },
    functions: {
      onSubmit
    },
    form: loginForm
  };
};
