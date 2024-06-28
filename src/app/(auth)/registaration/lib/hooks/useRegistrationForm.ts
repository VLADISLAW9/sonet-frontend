import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { RegistrationSchema } from '@/app/(auth)/registaration/lib/schemas/registrationSchema';
import { registrationSchema } from '@/app/(auth)/registaration/lib/schemas/registrationSchema';

export const useRegistrationForm = () => {
  const registrationForm = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema)
  });

  const onSubmit = registrationForm.handleSubmit(async () => {});

  return {
    form: registrationForm,
    isLoading: registrationForm.formState.isSubmitting,
    onSubmit
  };
};
