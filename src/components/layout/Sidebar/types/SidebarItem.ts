import type React from 'react';

export interface SidebarItem {
  path: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}
