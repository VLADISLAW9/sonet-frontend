import LogoSvg from '@/shared/assets/images/sonet-logo-purple.svg';
import { cn } from '@/shared/lib/utils';

interface LogotypeProps {
  className?: string;
}

export const Logotype = (props: LogotypeProps) => {
  const { className } = props;
  return <LogoSvg className={className} />;
};
