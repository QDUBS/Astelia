"use client";

import {
  SidebarFooterItems,
  SidebarItems,
} from "@/constants/SidebarItems.constants";
import { SidebarContext } from "@/context/SidebarContext";
import { auth } from "@/firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiLogOut, BiMenu } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [user] = useAuthState(auth);
  const [activeUser, setActiveUser] = useState("");
  const [active, setActive] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { collapsed, handleCollapse } = useContext(SidebarContext);
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    signOut(auth);
    sessionStorage.removeItem("user");
    router.push("/signin");
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
    setActiveUser(userSession!!);
  }, []);

  return (
    <div className="sidebar-wrapper">
      <button className="menu-icon" onClick={toggleSidebar}>
        <BiMenu size={30} />
      </button>

      <button className="button" onClick={handleCollapse}>
        <MdOutlineKeyboardArrowLeft color="#fff" size={30} />
      </button>

      <aside
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        data-collapse={collapsed}
      >
        {/* Logo */}
        <div>
          <div className="logo-wrapper">
            <Image
              src="/images/logo.png"
              width={80}
              height={80}
              alt="logo"
              className="sidebar-logo"
            />
            <p className="sidebar-logoname">Astelia</p>
          </div>

          {/* Sidebar links */}
          <ul className="sidebar-list">
            {SidebarItems.map(({ name, href, icon }) => (
              <SidebarItem
                key={name}
                name={name}
                href={href}
                icon={icon}
                collapsed={collapsed}
                onclick={() => setActive(name)}
                active={active}
                route={pathname}
              />
            ))}
          </ul>
        </div>

        {/* Sidebar footer */}
        <div className="w-full h-fit py-2 ">
          <ul className="sidebar-list">
            {SidebarFooterItems.map(({ name, href, icon }) => (
              <SidebarItem
                key={name}
                name={name}
                href={href}
                icon={icon}
                collapsed={collapsed}
                onclick={() => setActive(name)}
                active={active}
                route={pathname}
              />
            ))}
          </ul>

          <div className="sidebar-footer">
            <div className="sidebar-footer-image">
              <FaUserCircle color="#ccc" size={34} />
              <div>
                <p className="sidebar-footer-text truncate">{user?.email}</p>
                <span className="sidebar-footer-text-2">View Profile</span>
              </div>
            </div>

            {!collapsed && (
              <Image
                src="/icons/sidebar/logout.svg"
                alt="logout"
                width={15}
                height={15}
                className=" cursor-pointer"
                onClick={logout}
              />
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
