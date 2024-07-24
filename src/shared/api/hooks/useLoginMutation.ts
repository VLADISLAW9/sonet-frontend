import { useMutation } from '@tanstack/react-query';

import type { LoginConfig } from '@/shared/api/requests/auth';
import { login } from '@/shared/api/requests/auth';

export const useLoginMutation = () =>
  useMutation({
    mutationKey: ['login'],
    mutationFn: (config: LoginConfig) => {
      return login(config);
    }
  });
