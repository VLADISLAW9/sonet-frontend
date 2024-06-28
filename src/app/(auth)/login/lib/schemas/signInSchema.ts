import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .email('Неверный формат почты'),
  password: z.string({ required_error: 'Поле обязательно для заполнения' })
});

export type SignInSchema = z.infer<typeof signInSchema>;
