import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';
import type { Mods } from '@/shared/types';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'nowrap' | 'wrap';
export type FlexGap = '0' | '4' | '8' | '16' | '24' | '32' | '48';

const justifyClasses: Record<FlexJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between'
};

const alignClasses: Record<FlexAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end'
};

const directionClasses: Record<FlexDirection, string> = {
  row: 'flex-row',
  column: 'flex-col'
};

const gapClasses: Record<FlexGap, string> = {
  0: 'gap-0',
  4: 'gap-1',
  8: 'gap-2',
  16: 'gap-4',
  24: 'gap-6',
  32: 'gap-8',
  48: 'gap-12'
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  wrap?: FlexWrap;
  gap?: FlexGap;
  max?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    wrap = 'nowrap',
    gap = '0',
    max,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    wrap,
    gap && gapClasses[gap]
  ];

  const mods: Mods = {
    'w-full': max
  };

  return (
    <div className={cn('flex', mods, classes)} {...otherProps}>
      {children}
    </div>
  );
};
