import type { ReactNode } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';

import { Form } from '@/components/ui/Form';

interface FormWrapperProps<FIELDS extends FieldValues> {
  form: UseFormReturn<FIELDS, any, undefined>;
  children: ReactNode;
  onSubmit: () => {};
}

export const FormWrapper = <FIELDS extends FieldValues>({
  form,
  children,
  onSubmit
}: FormWrapperProps<FIELDS>) => (
  <Form {...form}>
    <form onSubmit={onSubmit}>{children}</form>
  </Form>
);
