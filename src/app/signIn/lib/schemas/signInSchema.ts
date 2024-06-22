import { z } from 'zod';

export const signInSchema = z.object({
  login: z.string({ required_error: 'Поле обязательно для заполнения' }),
  password: z.string({ required_error: 'Поле обязательно для заполнения' })
});

export type SignInSchema = z.infer<typeof signInSchema>;
