import { SidebarProps } from "@/types/sidebar.types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  name: string;
  href: string;
  icon: any;
  onclick: () => void;
  active: string;
  route: string;
};

const SidebarItem = ({
  collapsed,
  name,
  href,
  icon,
  onclick,
  active,
  route,
}: SidebarProps) => {
  const [showTooltip, setShowToolTip] = useState("");

  return (
    <>
      {route === href ? (
        <li className="sidebar-item" onClick={onclick}>
          <Link
            href={href}
            className={`sidebar-link ${!collapsed && "sidebar-active"}`}
          >
            <span className="sidebar-icon">
              <Image
                src={icon}
                alt="img"
                width={15}
                height={15}
                onMouseLeave={() => setShowToolTip("")}
                onMouseEnter={() => setShowToolTip(name)}
              />
              {showTooltip == name && collapsed && (
                <span className="sidebar-tooltip">{name}</span>
              )}
            </span>
            <span className="sidebar-name">{name}</span>
          </Link>
        </li>
      ) : (
        <li className="sidebar-item" onClick={onclick}>
          <Link href={href} className="sidebar-link-inactive">
            <span
              className="sidebar-icon"
              onMouseLeave={() => setShowToolTip("")}
              onMouseEnter={() => setShowToolTip(name)}
            >
              <Image src={icon} alt="img" width={15} height={15} />
              {showTooltip == name && collapsed && (
                <span className="sidebar-tooltip">{name}</span>
              )}
            </span>
            <span className="sidebar-name-inactive">{name}</span>
          </Link>
        </li>
      )}
    </>
  );
};

export default SidebarItem;
