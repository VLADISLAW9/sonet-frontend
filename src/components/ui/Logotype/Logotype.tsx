import { cn } from '@/shared/lib/utils';

interface LogotypeProps {
  className?: string;
}

export const Logotype = (props: LogotypeProps) => {
  const { className } = props;
  return <div className={cn('w-14 h-14 rounded-md bg-secondary', className)} />;
};
