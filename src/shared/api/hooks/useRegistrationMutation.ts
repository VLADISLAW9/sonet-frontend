import { useMutation } from '@tanstack/react-query';

import type { RegisterConfig } from '@/shared/api/requests/auth';
import { register } from '@/shared/api/requests/auth';

export const useRegistrationMutation = () =>
  useMutation({
    mutationKey: ['register'],
    mutationFn: (config: RegisterConfig) => {
      return register(config);
    }
  });
