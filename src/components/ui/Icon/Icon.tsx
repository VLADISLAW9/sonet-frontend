import React from 'react';

import { cn } from '@/shared/lib/utils';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

export type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = (props: IconProps) => {
  const { className, Svg, width = 32, height = 32, clickable, ...otherProps } = props;

  const icon = (
    <Svg
      className={cn('text-accent', className)}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        type='button'
        className='p-0 border-none m-0 bg-none cursor-pointer outline-none'
        onClick={props?.onClick}
        style={{ height, width }}
      >
        {icon}
      </button>
    );
  }

  return icon;
};
