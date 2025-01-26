"use client";
import React, { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const initialState = { collapsed: true, handleCollapse: () => {} };

export const SidebarContext = createContext(initialState);

const SidebarProvider = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
    console.log('Collapsed:', collapsed);
  };

  return (
    <SidebarContext.Provider value={{ collapsed, handleCollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
