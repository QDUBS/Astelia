import { AiFillSetting } from "react-icons/ai";
import { BiSolidNotification } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { RiDashboardHorizontalFill, RiSecurePaymentFill } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";

export const SidebarItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: "/icons/sidebar/menu.svg",
  },
  {
    name: "Servers",
    href: "/servers",
    icon: "/icons/sidebar/alert.svg",
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: "/icons/sidebar/cube.svg",
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: "/icons/sidebar/square.svg",
  },
];

export const SidebarFooterItems = [
  {
    name: "Settings",
    href: "/settings",
    icon: "/icons/sidebar/settings.svg",
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: "/icons/sidebar/notification.svg",
  },
];
