import Link from 'next/link';

import LogoSvg from '@/shared/assets/images/sonet-logo-black.svg';
import { getRouteHome } from '@/shared/consts/router';

interface LogotypeProps {
  className?: string;
}

export const Logotype = (props: LogotypeProps) => {
  const { className } = props;
  return (
    <Link href={getRouteHome()}>
      <LogoSvg className={className} />
    </Link>
  );
};
