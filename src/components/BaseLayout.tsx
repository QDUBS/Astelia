import React, { ReactNode } from "react";
import Sidebar from "./dashboard/Sidebar";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function BaseLayout({ children }: Props) {
  return (
    <div className="layout">
      <Sidebar />
      {children}
    </div>
  );
}
