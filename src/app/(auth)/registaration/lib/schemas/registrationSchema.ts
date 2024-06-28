import { z } from 'zod';

export const registrationSchema = z.object({
  email: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .email('Неверный формат почты'),
  password: z.string({ required_error: 'Поле обязательно для заполнения' })
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
