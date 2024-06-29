import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .email('Неверный формат почты'),
  password: z.string({ required_error: 'Поле обязательно для заполнения' })
});

export type LoginSchema = z.infer<typeof loginSchema>;
