import { getRouteHome } from '@/shared/consts/router';
import { SidebarItem } from '../../../Sidebar/types/SidebarItem/types/SidebarItem';

import HomeIcon from '@/shared/assets/icons/home.svg';
import UserIcon from '@/shared/assets/icons/user.svg';

export const getSidebarItems = () => {
  const isLoggedIn = true;

  const sidebarItems: SidebarItem[] = [
    {
      path: getRouteHome(),
      Icon: HomeIcon,
      text: 'Главная'
    }
  ];

  if (isLoggedIn) {
    sidebarItems.push({
      path: '/profile',
      Icon: UserIcon,
      text: 'Профиль'
    });
  }

  return sidebarItems;
};
