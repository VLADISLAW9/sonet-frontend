import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SignInSchema, signInSchema } from '../schemas/signInSchema';

export const useSignInForm = () =>
  useForm<SignInSchema>({
    resolver: zodResolver(signInSchema)
  });
