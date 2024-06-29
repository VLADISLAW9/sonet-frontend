import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { getRouteLogin } from '@/shared/consts/router';

import type { RegistrationSchema } from '../schemas/registrationSchema';
import { registrationSchema } from '../schemas/registrationSchema';

import { useRegistrationMutation } from './useRegistrationMutation';

export const useRegistrationForm = () => {
  const router = useRouter();

  const registrationForm = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema)
  });

  const registrationMutation = useRegistrationMutation();

  const [error, setError] = useState('');

  const onSubmit = registrationForm.handleSubmit(async (values) => {
    setError('');

    const registrationMutationResponse = await registrationMutation.mutateAsync({
      params: {
        email: values.email,
        password: values.password,
        name: values.name,
        surname: values.surname,
        nickname: values.nickname
      }
    });

    if (
      registrationMutationResponse.status !== 200 &&
      typeof registrationMutationResponse.data === 'string'
    ) {
      setError(registrationMutationResponse.data);
    }

    router.push(getRouteLogin());
  });

  return {
    form: registrationForm,
    isLoading: registrationForm.formState.isSubmitting,
    onSubmit,
    error
  };
};
