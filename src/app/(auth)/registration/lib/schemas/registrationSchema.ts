import { z } from 'zod';

export const registrationSchema = z
  .object({
    name: z.string({ required_error: 'Поле обязательно для заполнения' }),
    surname: z.string({ required_error: 'Поле обязательно для заполнения' }),
    nickname: z.string({ required_error: 'Поле обязательно для заполнения' }),
    email: z
      .string({ required_error: 'Поле обязательно для заполнения' })
      .email('Неверный формат почты'),
    password: z.string({ required_error: 'Поле обязательно для заполнения' }),
    confirmPassword: z.string({ required_error: 'Поле обязательно для заполнения' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword']
  });

export type RegistrationSchema = z.infer<typeof registrationSchema>;
