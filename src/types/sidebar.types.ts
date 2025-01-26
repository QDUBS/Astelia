export type SidebarProps = {
  name: string;
  href: string;
  icon: any;
  collapsed: boolean;
  onclick: () => void;
  active: string;
  route: string;
};
