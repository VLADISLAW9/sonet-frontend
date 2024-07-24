import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';

import type { RegistrationSchema } from '@/app/(auth)/registration/consts/registrationSchema';
import { registrationSchema } from '@/app/(auth)/registration/consts/registrationSchema';
import { useRegistrationMutation } from '@/shared/api/hooks/useRegistrationMutation';
import { getRouteLogin } from '@/shared/consts/router';

export const useRegistrationForm = () => {
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

    redirect(getRouteLogin());
  });

  return {
    form: registrationForm,
    isLoading: registrationForm.formState.isSubmitting,
    onSubmit,
    error
  };
};
