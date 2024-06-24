import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { SignInSchema } from '../schemas/signInSchema';
import { signInSchema } from '../schemas/signInSchema';

export const useSignInForm = () =>
  useForm<SignInSchema>({
    resolver: zodResolver(signInSchema)
  });
