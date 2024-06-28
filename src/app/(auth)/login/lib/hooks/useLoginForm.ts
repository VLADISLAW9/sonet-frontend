import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { getRouteHome } from '@/shared/consts/router';

import type { SignInSchema } from '../schemas/signInSchema';
import { signInSchema } from '../schemas/signInSchema';

import { useLoginMutation } from './useLoginMutation';

export const useLoginForm = () => {
  const router = useRouter();
  const loginMutation = useLoginMutation();

  const loginForm = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema)
  });

  const onSubmit = loginForm.handleSubmit(async (values) => {
    const loginMutationResponse = await loginMutation.mutateAsync({
      params: {
        email: values.email,
        password: values.password
      }
    });

    if (loginMutationResponse.status === 200) {
      router.push(getRouteHome());
    }
  });

  return {
    form: loginForm,
    isLoading: loginForm.formState.isSubmitting,
    onSubmit
  };
};
